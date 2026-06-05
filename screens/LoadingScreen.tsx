import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

type VideoItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const ALL_VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Mika jugando feliz',
    subtitle: 'Video recomendado para adopción',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Bruno paseando',
    subtitle: 'Nuevo contenido del refugio',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Luna descansando',
    subtitle: 'Historia destacada de hoy',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Toby aprendiendo trucos',
    subtitle: 'Momentos tiernos del día',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Kira en el patio',
    subtitle: 'Más videos para seguir viendo',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Milo comiendo premio',
    subtitle: 'Contenido cargado al bajar',
    image: 'https://images.unsplash.com/photo-1574293876203-8bded53be0f0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Riley corriendo',
    subtitle: 'Siguiente bloque de videos',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Cachorros jugando',
    subtitle: 'Más contenido disponible',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Perritos del refugio',
    subtitle: 'Carga progresiva',
    image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'Adopción responsable',
    subtitle: 'Últimos contenidos',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1200&auto=format&fit=crop',
  },
];

const PAGE_SIZE = 4;

export default function LoadingScreen() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);

  const visibleVideos = useMemo(() => {
    return ALL_VIDEOS.slice(0, visibleCount);
  }, [visibleCount]);

  const loadMore = () => {
    if (loadingMore) return;
    if (visibleCount >= ALL_VIDEOS.length) return;

    setLoadingMore(true);

    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, ALL_VIDEOS.length));
      setLoadingMore(false);
    }, 900);
  };

  const renderFooter = () => {
    if (!loadingMore) return <View style={{ height: 10 }} />;

    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#B88761" />
        <Text style={styles.footerText}>Cargando más videos...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos del refugio</Text>
      <Text style={styles.subtitle}>
        Baja para descubrir más contenido poco a poco
      </Text>

      <FlatList
        data={visibleVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1EA',
    paddingTop: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A3728',
    textAlign: 'center',
    paddingHorizontal: 18,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 14,
    fontSize: 14,
    color: '#7C6A5A',
    textAlign: 'center',
    paddingHorizontal: 24,
    lineHeight: 20,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#FFFDF9',
    borderRadius: 24,
    padding: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 18,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#4A3728',
  },
  cardSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: '#8B7766',
    lineHeight: 19,
  },
  footerLoader: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
    color: '#8B7766',
  },
});