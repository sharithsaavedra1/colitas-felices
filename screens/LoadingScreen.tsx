import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ALL_VIDEOS } from '../data/videos';
import { usePaginatedFeed } from '../hooks/usePaginatedFeed';
import FeedCard from '../components/loading/FeedCard';
import FooterLoader from '../components/loading/FooterLoader';

export default function LoadingScreen() {
  const { visible, loadingMore, loadMore } = usePaginatedFeed({ data: ALL_VIDEOS, pageSize: 4 });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos del refugio</Text>
      <Text style={styles.subtitle}>Baja para descubrir más contenido poco a poco</Text>

      <FlatList
        data={visible}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedCard item={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<FooterLoader loading={loadingMore} />}
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