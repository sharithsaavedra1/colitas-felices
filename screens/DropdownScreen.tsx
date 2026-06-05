import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CategoryPicker from '../components/dropdown/CategoryPicker';
import PetListItem from '../components/pets/PetListItem';
import { usePetFilter } from '../hooks/usePetFilter';
import { filters } from '../data/filters';

export default function DropdownScreen() {
  const { selected, setSelected, filtered } = usePetFilter('all');

  const selectedLabel = filters.find((f) => f.value === selected)?.label || 'Selecciona una categoría';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar perritos</Text>
      <Text style={styles.subtitle}>Selecciona una categoría y mira solo esos resultados</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Categoría</Text>
        <CategoryPicker selected={selected} onChange={setSelected} />
      </View>

      <Text style={styles.listTitle}>Resultados ({filtered.length})</Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 18 }}
        renderItem={({ item }) => (
          <PetListItem name={item.name} sizeLabel={filters.find((f) => f.value === item.size)?.label} />
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