import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  right: React.ReactNode;
  onPress?: () => void;
};

export default function SettingOption({
  icon,
  title,
  subtitle,
  right,
  onPress,
}: Props) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={styles.rowLeft}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color={COLORS.primary} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.rowTitle}>{title}</Text>
          <Text style={styles.rowSubtitle}>{subtitle}</Text>
        </View>
      </View>

      {right}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: COLORS.soft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.text,
  },
  rowSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: COLORS.muted,
  },
});