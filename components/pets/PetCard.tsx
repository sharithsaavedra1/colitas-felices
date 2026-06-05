import React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Pet } from '../../types';

type Props = {
  pet: Pet;
  onPress: () => void;
};

export default function PetCard({ pet, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: pet.img }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.meta}>
          {pet.breed} · {pet.age}
        </Text>
        <Text style={styles.desc} numberOfLines={2}>
          {pet.description}
        </Text>
      </View>
      <Text style={styles.link}>Ver</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 18,
    marginRight: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: '900',
    color: COLORS.text,
  },
  meta: {
    marginTop: 2,
    fontSize: 13,
    color: COLORS.subtitle,
  },
  desc: {
    marginTop: 4,
    fontSize: 13,
    color: COLORS.muted,
  },
  link: {
    color: COLORS.primary,
    fontWeight: '900',
  },
});