import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

type Props = { name: string; sizeLabel?: string };

export default function PetListItem({ name, sizeLabel }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.dot}>
        <Ionicons name="paw" size={14} color="#fff" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.petName}>{name}</Text>
        {sizeLabel ? <Text style={styles.petCat}>{sizeLabel}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
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
  petName: { fontSize: 16, fontWeight: '900', color: '#4A3728' },
  petCat: { marginTop: 2, fontSize: 12, color: '#8B7766' },
});
