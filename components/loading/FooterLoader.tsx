import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

type Props = { loading?: boolean };

export default function FooterLoader({ loading = false }: Props) {
  if (!loading) return <View style={{ height: 10 }} />;

  return (
    <View style={styles.footerLoader}>
      <ActivityIndicator size="small" color={COLORS.primary} />
      <Text style={styles.footerText}>Cargando más videos...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerLoader: { paddingVertical: 18, alignItems: 'center', justifyContent: 'center' },
  footerText: { marginTop: 8, fontSize: 12, fontWeight: '700', color: COLORS.muted },
});
