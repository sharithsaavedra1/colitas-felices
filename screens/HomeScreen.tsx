import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import { homePets } from '../data/pets';
import PetCard from '../components/pets/PetCard';
import { RootStackParamList } from '../navigation/types';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();
  return (
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      <View style={styles.heroCard}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/1200x/61/7a/03/617a032c91678c37343209bb6bef2f6d.jpg',
          }}
          style={styles.heroImage}
        />
        <View style={styles.heroTextWrap}>
          <Text style={styles.brand}>Colitas Felices</Text>
          <Text style={styles.subtitle}>Adopta, acompaña y cambia una vida.</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Perritos disponibles</Text>

      {homePets.map((pet) => (
        <PetCard key={pet.name} pet={pet} onPress={() => navigation.navigate('Detalle', pet)} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { backgroundColor: COLORS.background },
  container: { padding: 18, paddingBottom: 28 },
  heroCard: {
    backgroundColor: COLORS.card,
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  heroImage: { width: '100%', height: 280 },
  heroTextWrap: { padding: 18, backgroundColor: COLORS.card },
  brand: { fontSize: 28, fontWeight: '900', color: COLORS.text },
  subtitle: { marginTop: 6, fontSize: 15, color: COLORS.subtitle, lineHeight: 21 },
  sectionTitle: {
    marginTop: 22,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.text,
  },
});