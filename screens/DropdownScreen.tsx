import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Pressable,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

type FilterId = 'all' | 'small' | 'medium' | 'large' | 'puppy' | 'adult';

const filters = [
  { label: 'Todos', value: 'all' as FilterId },
  { label: 'Pequeños', value: 'small' as FilterId },
  { label: 'Medianos', value: 'medium' as FilterId },
  { label: 'Grandes', value: 'large' as FilterId },
  { label: 'Cachorros', value: 'puppy' as FilterId },
  { label: 'Adultos', value: 'adult' as FilterId },
];

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
  const [selected, setSelected] = useState<FilterId>('all');
  const [iosPickerVisible, setIosPickerVisible] = useState(false);

  const selectedLabel =
    filters.find((f) => f.value === selected)?.label || 'Selecciona una categoría';

  const filteredPets = useMemo(() => {
    if (selected === 'all') return pets;
    return pets.filter((pet) => pet.size === selected);
  }, [selected]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar perritos</Text>
      <Text style={styles.subtitle}>
        Selecciona una categoría y mira solo esos resultados
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Categoría</Text>

        {Platform.OS === 'ios' ? (
          <>
            <Pressable
              style={styles.iosSelectButton}
              onPress={() => setIosPickerVisible(true)}
            >
              <Text style={styles.iosSelectText}>{selectedLabel}</Text>
              <Ionicons name="chevron-down" size={20} color="#B88761" />
            </Pressable>

            <Text style={styles.helper}>Toca para abrir las opciones</Text>

            <Modal
              visible={iosPickerVisible}
              transparent
              animationType="slide"
              onRequestClose={() => setIosPickerVisible(false)}
            >
              <Pressable
                style={styles.modalBackdrop}
                onPress={() => setIosPickerVisible(false)}
              />

              <View style={styles.iosSheet}>
                <View style={styles.iosSheetHeader}>
                  <Pressable onPress={() => setIosPickerVisible(false)}>
                    <Text style={styles.headerAction}>Cancelar</Text>
                  </Pressable>

                  <Text style={styles.headerTitle}>Selecciona categoría</Text>

                  <Pressable onPress={() => setIosPickerVisible(false)}>
                    <Text style={styles.headerAction}>Listo</Text>
                  </Pressable>
                </View>

                <Picker
                  selectedValue={selected}
                  onValueChange={(itemValue) => setSelected(itemValue as FilterId)}
                  itemStyle={styles.itemStyleIOS}
                >
                  {filters.map((f) => (
                    <Picker.Item key={f.value} label={f.label} value={f.value} />
                  ))}
                </Picker>
              </View>
            </Modal>
          </>
        ) : (
          <>
            <View style={styles.pickerWrap}>
              <Picker
                selectedValue={selected}
                onValueChange={(itemValue) => setSelected(itemValue as FilterId)}
                style={styles.picker}
                dropdownIconColor="#B88761"
              >
                {filters.map((f) => (
                  <Picker.Item key={f.value} label={f.label} value={f.value} />
                ))}
              </Picker>
            </View>

            <Text style={styles.helper}>Seleccionado: {selectedLabel}</Text>
          </>
        )}
      </View>

      <Text style={styles.listTitle}>Resultados ({filteredPets.length})</Text>

      <FlatList
        data={filteredPets}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 18 }}
        renderItem={({ item }) => (
          <View style={styles.petRow}>
            <View style={styles.dot}>
              <Ionicons name="paw" size={14} color="#fff" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.petName}>{item.name}</Text>
              <Text style={styles.petCat}>
                {filters.find((f) => f.value === item.size)?.label}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F7F1EA',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A3728',
    textAlign: 'center',
    marginTop: 18,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#7C6A5A',
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#FFFDF9',
    borderRadius: 24,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4A3728',
    marginBottom: 10,
  },
  iosSelectButton: {
    minHeight: 58,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#D9C3AE',
    backgroundColor: '#FDF8F2',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iosSelectText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4A3728',
  },
  helper: {
    marginTop: 10,
    fontSize: 12,
    color: '#8B7766',
    fontWeight: '700',
  },
  pickerWrap: {
    backgroundColor: '#F7F1EA',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E7D8C8',
    overflow: 'hidden',
    minHeight: 60,
    justifyContent: 'center',
  },
  picker: {
    color: '#4A3728',
    width: '100%',
    height: 60,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.28)',
  },
  iosSheet: {
    backgroundColor: '#FFFDF9',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 24,
  },
  iosSheetHeader: {
    height: 54,
    borderBottomWidth: 1,
    borderBottomColor: '#EADFD3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerAction: {
    fontSize: 17,
    fontWeight: '700',
    color: '#B88761',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4A3728',
  },
  itemStyleIOS: {
    fontSize: 20,
    color: '#4A3728',
  },
  listTitle: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '900',
    color: '#4A3728',
  },
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
  dot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#B88761',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  petName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4A3728',
  },
  petCat: {
    marginTop: 2,
    fontSize: 12,
    color: '#8B7766',
  },
});