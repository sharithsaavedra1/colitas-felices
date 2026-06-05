import React from 'react';
import {
  View,
  Text,
  Platform,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { filters } from '../../data/filters';
import { FilterId } from '../../types';
import { COLORS } from '../../constants/colors';

type Props = {
  selected: FilterId;
  onChange: (v: FilterId) => void;
};

export default function CategoryPicker({ selected, onChange }: Props) {
  const [visible, setVisible] = React.useState(false);

  const selectedLabel = filters.find((f) => f.value === selected)?.label || 'Selecciona una categoría';

  if (Platform.OS === 'ios') {
    return (
      <>
        <Pressable style={styles.iosSelectButton} onPress={() => setVisible(true)}>
          <Text style={styles.iosSelectText}>{selectedLabel}</Text>
          <Ionicons name="chevron-down" size={20} color={COLORS.primary} />
        </Pressable>

        <Modal visible={visible} transparent animationType="slide" onRequestClose={() => setVisible(false)}>
          <Pressable style={styles.modalBackdrop} onPress={() => setVisible(false)} />
          <View style={styles.iosSheet}>
            <View style={styles.iosSheetHeader}>
              <Pressable onPress={() => setVisible(false)}>
                <Text style={styles.headerAction}>Cancelar</Text>
              </Pressable>

              <Text style={styles.headerTitle}>Selecciona categoría</Text>

              <Pressable onPress={() => setVisible(false)}>
                <Text style={styles.headerAction}>Listo</Text>
              </Pressable>
            </View>

            <Picker selectedValue={selected} onValueChange={(v) => onChange(v as FilterId)} itemStyle={styles.itemStyleIOS}>
              {filters.map((f) => (
                <Picker.Item key={f.value} label={f.label} value={f.value} />
              ))}
            </Picker>
          </View>
        </Modal>
      </>
    );
  }

  return (
    <View>
      <View style={styles.pickerWrap}>
        <Picker selectedValue={selected} onValueChange={(v) => onChange(v as FilterId)} style={styles.picker} dropdownIconColor={COLORS.primary}>
          {filters.map((f) => (
            <Picker.Item key={f.value} label={f.label} value={f.value} />
          ))}
        </Picker>
      </View>
      <Text style={styles.helper}>Seleccionado: {selectedLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  picker: { color: '#4A3728', width: '100%', height: 60 },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.28)' },
  iosSheet: { backgroundColor: '#FFFDF9', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingBottom: 24 },
  iosSheetHeader: {
    height: 54,
    borderBottomWidth: 1,
    borderBottomColor: '#EADFD3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerAction: { fontSize: 17, fontWeight: '700', color: '#B88761' },
  headerTitle: { fontSize: 16, fontWeight: '900', color: '#4A3728' },
  itemStyleIOS: { fontSize: 20, color: '#4A3728' },
});
