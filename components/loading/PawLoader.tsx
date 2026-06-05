import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

export default function PawLoader() {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0.7)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.15,
            duration: 450,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.7,
            duration: 450,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(rotate, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    );

    loop.start();
    return () => loop.stop();
  }, [scale, opacity, rotate]);

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-8deg', '8deg'],
  });

  return (
    <Animated.View
      style={[
        styles.pawWrap,
        {
          opacity,
          transform: [{ scale }, { rotate: spin }],
        },
      ]}
    >
      <Ionicons name="paw" size={54} color={COLORS.primary} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pawWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: COLORS.soft,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
});