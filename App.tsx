import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F1EA',
    card: '#FFFDF9',
    text: '#4A3728',
    border: '#E7D8C8',
    primary: '#B88761',
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}