import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { calculate } from '../utils/calculator';
import ScreenHeader from '../components/common/ScreenHeader';

export default function CalculatorScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('0');

  const handleCalc = (op: string) => {
    Keyboard.dismiss();
    setResult(calculate(a, b, op));
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.container}
        keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={{
            uri: 'https://i.pinimg.com/1200x/48/db/a8/48dba86fb51376627e1e53b48c377bdc.jpg',
          }}
          style={styles.image}
        />

        <ScreenHeader
          title="Calculadora de raciones"
          subtitle="Calcula porciones para alimentar perritos del refugio"
        />

        <TextInput
          style={styles.input}
          placeholder="Kilos del perro"
          keyboardType="numeric"
          value={a}
          onChangeText={setA}
          placeholderTextColor="#A58E7A"
          returnKeyType="done"
        />

        <TextInput
          style={styles.input}
          placeholder="Ración diaria"
          keyboardType="numeric"
          value={b}
          onChangeText={setB}
          placeholderTextColor="#A58E7A"
          returnKeyType="done"
        />

        <View style={styles.row}>
          <Pressable style={styles.op} onPress={() => handleCalc('+')}>
            <Text style={styles.opText}>+</Text>
          </Pressable>

          <Pressable style={styles.op} onPress={() => handleCalc('-')}>
            <Text style={styles.opText}>-</Text>
          </Pressable>

          <Pressable style={styles.op} onPress={() => handleCalc('*')}>
            <Text style={styles.opText}>×</Text>
          </Pressable>

          <Pressable style={styles.op} onPress={() => handleCalc('/')}>
            <Text style={styles.opText}>÷</Text>
          </Pressable>
        </View>

        <Text style={styles.result}>Resultado: {result}</Text>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    padding: 18,
    backgroundColor: COLORS.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 24,
    marginBottom: 18,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    color: COLORS.text,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  op: {
    width: '22%',
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  opText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '900',
  },
  result: {
    marginTop: 22,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    color: COLORS.text,
  },
  bottomSpace: {
    height: 30,
  },
});