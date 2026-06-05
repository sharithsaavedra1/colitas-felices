import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';


// ==================================================
// TIPADO
// ==================================================

// FilterId define un conjunto cerrado de valores permitidos.
// Esto ayuda a TypeScript a controlar que solo se usen
// categorías válidas dentro del filtro.
type FilterId = 'all' | 'small' | 'medium' | 'large' | 'puppy' | 'adult';

// ==================================================
// DATOS DEL PICKER
// ==================================================

// "filters" contiene las opciones que verá el usuario en el Picker.
// Cada opción tiene:
// - label: el texto visible
// - value: el valor interno con el que trabajará el programa
const filters = [
  { label: 'Todos', value: 'all' as FilterId },
  { label: 'Pequeños', value: 'small' as FilterId },
  { label: 'Medianos', value: 'medium' as FilterId },
  { label: 'Grandes', value: 'large' as FilterId },
  { label: 'Cachorros', value: 'puppy' as FilterId },
  { label: 'Adultos', value: 'adult' as FilterId },
];

// ==================================================
// DATOS DE LA LISTA
// ==================================================

// "pets" es el arreglo base de perritos.
// Cada objeto tiene:
// - name: nombre del perrito
// - size: categoría que será usada para filtrar
const pets = [
  { name: 'Mika', size: 'medium' as FilterId },
  { name: 'Riley', size: 'large' as FilterId },
  { name: 'Luna', size: 'small' as FilterId },
  { name: 'Toby', size: 'puppy' as FilterId },
  { name: 'Kira', size: 'adult' as FilterId },
  { name: 'Milo', size: 'small' as FilterId },
  { name: 'Bruno', size: 'medium' as FilterId },
];

export default function DropdownScreen() {
  // ==================================================
  // ESTADO
  // ==================================================

  // "selected" guarda la opción actualmente elegida en el Picker.
  // Empieza en "all", o sea, mostrar todos los perritos.
  const [selected, setSelected] = useState<FilterId>('all');

  // ==================================================
  // FILTRADO MEMORIZADO
  // ==================================================

  // useMemo memoriza el resultado del filtrado para evitar recalcularlo
  // en renderizados donde "selected" no haya cambiado.
  //
  // Si selected === 'all', devolvemos todo el arreglo.
  // Si no, filtramos solo los perritos cuya categoría coincida.
  const filteredPets = useMemo(() => {
    if (selected === 'all') return pets;
    return pets.filter((pet) => pet.size === selected);
  }, [selected]);

  // ==================================================
  // INTERFAZ
  // ==================================================

  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>Filtrar perritos</Text>

      {/* Texto guía para explicar qué hacer */}
      <Text style={styles.subtitle}>
        Selecciona una categoría y mira solo esos resultados
      </Text>

      {/* Tarjeta superior que agrupa el selector y el resumen */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          {/* Caja decorativa con ícono */}
          <View style={styles.iconBox}>
            <Ionicons name="paw-outline" size={18} color="#B88761" />
          </View>

          {/* Resumen textual de la categoría seleccionada */}
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Categoría seleccionada</Text>
            <Text style={styles.cardText}>
              {/* Busca en "filters" la opción cuyo value coincida con selected
                  y muestra su label. */}
              {filters.find((f) => f.value === selected)?.label}
            </Text>
          </View>
        </View>

        {/* Contenedor visual del Picker */}
        <View style={styles.pickerWrap}>
          <Picker
            // selectedValue conecta el valor del Picker con el estado
            selectedValue={selected}

            // onValueChange se ejecuta cuando el usuario elige una opción
            // y actualiza el estado con la nueva categoría
            onValueChange={(itemValue) => setSelected(itemValue as FilterId)}

            // Estilos visuales del Picker
            style={styles.picker}

            // Cambia el color del ícono desplegable
            dropdownIconColor="#B88761"

            // En iOS aplicamos un estilo especial a cada ítem
            itemStyle={Platform.OS === 'ios' ? styles.itemStyleIOS : undefined}
          >
            {/* Generación dinámica de opciones */}
            {filters.map((f) => (
              <Picker.Item key={f.value} label={f.label} value={f.value} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Título de la lista con conteo dinámico */}
      <Text style={styles.listTitle}>Resultados ({filteredPets.length})</Text>

      {/* FlatList muestra los resultados filtrados */}
      <FlatList
        // Datos que se van a renderizar
        data={filteredPets}

        // Clave única para cada elemento
        keyExtractor={(item) => item.name}

        // Espacio interno al final de la lista
        contentContainerStyle={{ paddingBottom: 18 }}

        // Cómo se dibuja cada fila
        renderItem={({ item }) => (
          <View style={styles.petRow}>
            {/* Ícono decorativo de cada fila */}
            <View style={styles.dot}>
              <Ionicons name="paw" size={14} color="#fff" />
            </View>

            {/* Contenido textual del elemento */}
            <View style={{ flex: 1 }}>
              <Text style={styles.petName}>{item.name}</Text>
              <Text style={styles.petCat}>
                {/* Busca el label legible asociado al value del item */}
                {filters.find((f) => f.value === item.size)?.label}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F7F1EA',
  },

  // Título principal
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A3728',
    textAlign: 'center',
    marginTop: 18,
  },

  // Subtítulo de ayuda
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#7C6A5A',
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 20,
  },

  // Tarjeta del bloque superior
  card: {
    backgroundColor: '#FFFDF9',
    borderRadius: 24,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  // Encabezado interno de la tarjeta
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Caja del ícono
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#F2E6DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  // Título pequeño del resumen
  cardTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Texto de la categoría actual
  cardText: {
    marginTop: 3,
    fontSize: 13,
    color: '#8B7766',
    fontWeight: '700',
  },

  // Envoltura visual del Picker
  pickerWrap: {
    backgroundColor: '#F7F1EA',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E7D8C8',
    overflow: 'hidden',
    minHeight: 68,
    justifyContent: 'center',
  },

  // Estilo base del Picker
  picker: {
    color: '#4A3728',
    width: '100%',
    height: 68,
    textAlign: 'center',
    ...Platform.select({
      android: {
        textAlign: 'center',
      },
      ios: {
        paddingVertical: 8,
      },
    }),
  },

  // Estilo de ítems específico para iOS
  itemStyleIOS: {
    fontSize: 18,
    height: 68,
    lineHeight: 24,
    color: '#4A3728',
  },

  // Título de la lista de resultados
  listTitle: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Fila individual de cada perrito
  petRow: {
    backgroundColor: '#FFFDF9',
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  // Círculo con ícono
  dot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#B88761',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  // Nombre del perrito
  petName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Categoría textual del perrito
  petCat: {
    marginTop: 2,
    fontSize: 12,
    color: '#8B7766',
  },
});