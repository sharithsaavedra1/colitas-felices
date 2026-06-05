import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

type Props = {
  title: string;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary';
};

export default function AppButton({
  title,
  onPress,
  icon,
  style,
  variant = 'primary',
}: Props) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      style={[styles.button, isPrimary ? styles.primary : styles.secondary, style]}
      onPress={onPress}
    >
      {icon ? (
        <Ionicons
          name={icon}
          size={18}
          color={isPrimary ? COLORS.white : COLORS.text}
          style={{ marginRight: 8 }}
        />
      ) : null}
      <Text style={[styles.text, { color: isPrimary ? COLORS.white : COLORS.text }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.border,
  },
  text: {
    fontWeight: '900',
    fontSize: 15,
  },
});