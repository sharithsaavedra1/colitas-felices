import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import InfoBadge from './InfoBadge';
import shelterInfo from '../../data/shelterInfo';
import { COLORS } from '../../constants/colors';

type Props = { onClose?: () => void };

export default function InfoModalContent(_props: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.modalContent}
    >
      <View style={styles.imageWrap}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/1200x/ab/95/57/ab9557e1791d014a763636822b714121.jpg',
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.modalTitle}>{shelterInfo.title}</Text>
      <Text style={styles.modalText}>{shelterInfo.message}</Text>

      <View style={styles.infoRow}>
        {shelterInfo.badges.map((b) => (
          <InfoBadge key={b.key} icon={b.icon} label={b.label} />
        ))}
      </View>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>Recomendaciones</Text>
        {shelterInfo.tips.map((t, i) => (
          <Text key={i} style={styles.tip}>
            • {t}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    paddingBottom: 18,
  },
  imageWrap: {
    padding: 14,
    paddingBottom: 0,
  },
  image: {
    width: '100%',
    height: 210,
    borderRadius: 22,
  },
  modalTitle: {
    marginTop: 16,
    paddingHorizontal: 18,
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.text,
  },
  modalText: {
    paddingHorizontal: 18,
    marginTop: 10,
    fontSize: 15,
    color: COLORS.subtitle,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
    marginTop: 16,
  },
  tips: {
    marginTop: 16,
    marginHorizontal: 18,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 8,
  },
  tip: {
    fontSize: 14,
    color: COLORS.subtitle,
    marginBottom: 6,
    lineHeight: 20,
  },
});