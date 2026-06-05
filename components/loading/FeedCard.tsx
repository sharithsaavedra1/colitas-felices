import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { VideoItem } from '../../types';
import { COLORS } from '../../constants/colors';

type Props = { item: VideoItem };

export default function FeedCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      {item.subtitle ? <Text style={styles.cardSubtitle}>{item.subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  image: { width: '100%', height: 220, borderRadius: 18, marginBottom: 12 },
  cardTitle: { fontSize: 20, fontWeight: '900', color: COLORS.text },
  cardSubtitle: { marginTop: 6, fontSize: 13, color: COLORS.muted, lineHeight: 19 },
});
