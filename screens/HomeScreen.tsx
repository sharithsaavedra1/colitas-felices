import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';

// ==================================================
// DATOS BASE
// ==================================================

// Arreglo con los datos de los perritos.
// Cada objeto representa un elemento que se mostrará como tarjeta en la pantalla principal.
const pets = [
  {
    name: 'Mika',
    breed: 'Pastor',
    age: '1 año',
    sex: 'Macho',
    size: 'Mediano',
    description: 'Dulce, juguetón y listo para encontrar una familia.',
    img: 'https://i.pinimg.com/736x/e2/68/ca/e268ca7f01ac1be3c6149a5a905e5c4b.jpg',
  },
  
  {
    name: 'Riley',
    breed: 'Golden',
    age: '5 meses',
    sex: 'Hembra',
    size: 'Grande',
    description: 'Cariñosa, tranquila y perfecta para un hogar amoroso.',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Luna',
    breed: 'Mestiza',
    age: '2 años',
    sex: 'Hembra',
    size: 'Pequeño',
    description: 'Muy obediente y en busca de una segunda oportunidad.',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
];

// Este componente representa la pantalla principal.
// Recibe "navigation" desde React Navigation para poder abrir otras pantallas.
export default function HomeScreen({ navigation }: any) {
  return (
    // ScrollView permite recorrer verticalmente toda la pantalla.
    // Aquí es útil porque hay una portada arriba y varias tarjetas debajo.
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      {/* ==================================================
          TARJETA PRINCIPAL / HERO
         ================================================== */}
      <View style={styles.heroCard}>
        {/* Imagen de portada del refugio */}
        <Image
          source={{
            uri: 'https://i.pinimg.com/1200x/61/7a/03/617a032c91678c37343209bb6bef2f6d.jpg',
          }}
          style={styles.heroImage}
        />

        {/* Contenedor del texto institucional */}
        <View style={styles.heroTextWrap}>
          <Text style={styles.brand}>Colitas Felices</Text>
          <Text style={styles.subtitle}>Adopta, acompaña y cambia una vida.</Text>
        </View>
      </View>

      {/* ==================================================
          TÍTULO DE SECCIÓN
         ================================================== */}
      <Text style={styles.sectionTitle}>Perritos disponibles</Text>

      {/* ==================================================
          LISTADO DE PERRITOS
         ================================================== */}

      {/* Recorremos el arreglo "pets" con map.
          Por cada elemento, generamos una tarjeta interactiva. */}
      {pets.map((pet) => (
        <Pressable
          key={pet.name}
          style={styles.petCard}
          // Cuando el usuario toca la tarjeta,
          // navega a la pantalla "Detalle" y envía el objeto pet.
          onPress={() => navigation.navigate('Detalle', pet)}
        >
          {/* Imagen individual del perrito */}
          <Image source={{ uri: pet.img }} style={styles.petImage} />

          {/* Contenedor del contenido textual */}
          <View style={{ flex: 1 }}>
            {/* Nombre del perrito */}
            <Text style={styles.petName}>{pet.name}</Text>

            {/* Metadatos resumidos: raza y edad */}
            <Text style={styles.petMeta}>
              {pet.breed} · {pet.age}
            </Text>

            {/* Descripción corta.
                numberOfLines={2} limita el texto a dos líneas visibles. */}
            <Text style={styles.petDesc} numberOfLines={2}>
              {pet.description}
            </Text>
          </View>

          {/* Indicador visual de acción */}
          <Text style={styles.openText}>Ver</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  // Fondo general de la pantalla
  bg: {
    backgroundColor: '#F7F1EA',
  },

  // Espaciado interno del contenido desplazable
  container: {
    padding: 18,
    paddingBottom: 28,
  },

  // Tarjeta grande de portada
  heroCard: {
    backgroundColor: '#FFFDF9',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  // Imagen principal de portada
  heroImage: {
    width: '100%',
    height: 280,
  },

  // Caja que envuelve el texto de portada
  heroTextWrap: {
    padding: 18,
    backgroundColor: '#FFFDF9',
  },

  // Nombre/marca del refugio
  brand: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Subtítulo o lema principal
  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: '#7C6A5A',
    lineHeight: 21,
  },

  // Título de la sección de perritos
  sectionTitle: {
    marginTop: 22,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Tarjeta de cada perrito
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF9',
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  // Imagen pequeña de cada perrito
  petImage: {
    width: 68,
    height: 68,
    borderRadius: 18,
    marginRight: 12,
  },

  // Nombre del perrito
  petName: {
    fontSize: 17,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Texto secundario con raza y edad
  petMeta: {
    marginTop: 2,
    fontSize: 13,
    color: '#7C6A5A',
  },

  // Descripción corta del perrito
  petDesc: {
    marginTop: 4,
    fontSize: 13,
    color: '#8B7766',
  },

  // Texto indicador de navegación
  openText: {
    color: '#B88761',
    fontWeight: '900',
  },
});