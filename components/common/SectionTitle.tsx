import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

type Props = { children: React.ReactNode };

export default function SectionTitle({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    marginTop: 22,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.text,
  },
});
