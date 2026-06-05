import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

type Props = { icon: string; label: string };

export default function InfoBadge({ icon, label }: Props) {
  return (
    <View style={styles.box}>
      <Ionicons name={icon as any} size={18} color={COLORS.primary} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: COLORS.soft,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 6,
  },
  text: { fontSize: 12, color: COLORS.text, fontWeight: '800', textAlign: 'center' },
});
