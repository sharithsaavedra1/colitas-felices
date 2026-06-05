import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';

// Este componente representa una pantalla completa.
// Su función es permitir que el usuario ingrese dos valores
// y luego realizar operaciones matemáticas básicas entre ellos.
export default function CalculatorScreen() {
  // =============================
  // ESTADOS
  // =============================

  // "a" guarda el texto escrito en el primer input.
  // "setA" es la función que actualiza ese valor.
  // Empieza vacío porque el usuario todavía no ha escrito nada.
  const [a, setA] = useState('');

  // "b" guarda el texto escrito en el segundo input.
  // También empieza vacío.
  const [b, setB] = useState('');

  // "result" guarda el resultado final que se mostrará en pantalla.
  // También se usa para enseñar mensajes de error o validación.
  // Inicia con "0" para que la pantalla no se vea vacía.
  const [result, setResult] = useState('0');

  // =============================
  // CONVERSIÓN DE DATOS
  // =============================

  // TextInput siempre entrega texto.
  // Por eso, aunque el usuario escriba números, React Native los recibe como string.
  // Para poder sumar, restar, multiplicar o dividir, primero los convertimos a number.
  const n1 = parseFloat(a);
  const n2 = parseFloat(b);

  // =============================
  // FUNCIÓN PRINCIPAL
  // =============================

  // "calc" recibe un operador matemático como parámetro.
  // Según ese operador, decide qué cálculo hacer.
  const calc = (op: string) => {
    // Validación básica:
    // Si alguno de los dos valores no es un número válido,
    // se muestra un mensaje y se detiene la función con "return".
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Ingresa números válidos');
      return;
    }

    // Si el operador es "+", suma ambos valores
    // y convierte el resultado a texto para mostrarlo en pantalla.
    if (op === '+') setResult(String(n1 + n2));

    // Si el operador es "-", resta el segundo valor al primero.
    if (op === '-') setResult(String(n1 - n2));

    // Si el operador es "*", multiplica los dos números.
    if (op === '*') setResult(String(n1 * n2));

    // Si el operador es "/", primero valida que el divisor no sea cero.
    // Si es cero, muestra un mensaje especial.
    // Si no, realiza la división normalmente.
    if (op === '/') setResult(n2 === 0 ? 'No se divide entre 0' : String(n1 / n2));
  };

  // =============================
  // INTERFAZ VISUAL
  // =============================

  return (
    <View style={styles.container}>
      {/* Imagen decorativa.
          No participa en el cálculo, pero mejora la presentación visual. */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/1200x/48/db/a8/48dba86fb51376627e1e53b48c377bdc.jpg',
        }}
        style={styles.image}
      />

      {/* Título principal de la pantalla */}
      <Text style={styles.title}>Calculadora de raciones</Text>

      {/* Texto descriptivo para explicar el propósito de la calculadora */}
      <Text style={styles.subtitle}>
        Calcula porciones para alimentar perritos del refugio
      </Text>

      {/* Primer campo de texto.
          value={a} enlaza el valor visual del input con el estado "a".
          onChangeText={setA} actualiza el estado cada vez que el usuario escribe.
          keyboardType="numeric" solicita un teclado numérico. */}
      <TextInput
        style={styles.input}
        placeholder="Kilos del perro"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
        placeholderTextColor="#A58E7A"
      />

      {/* Segundo campo de texto.
          Funciona igual que el primero, pero guarda el dato en "b". */}
      <TextInput
        style={styles.input}
        placeholder="Ración diaria"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
        placeholderTextColor="#A58E7A"
      />

      {/* Contenedor horizontal para alinear los cuatro botones en una fila */}
      <View style={styles.row}>
        {/* Cada Pressable ejecuta la función calc enviando un operador distinto.
            Esto hace que la misma función sirva para varias operaciones. */}
        <Pressable style={styles.op} onPress={() => calc('+')}>
          <Text style={styles.opText}>+</Text>
        </Pressable>

        <Pressable style={styles.op} onPress={() => calc('-')}>
          <Text style={styles.opText}>-</Text>
        </Pressable>

        <Pressable style={styles.op} onPress={() => calc('*')}>
          <Text style={styles.opText}>×</Text>
        </Pressable>

        <Pressable style={styles.op} onPress={() => calc('/')}>
          <Text style={styles.opText}>÷</Text>
        </Pressable>
      </View>

      {/* Resultado dinámico.
          Cada vez que cambia el estado "result", este texto se vuelve a renderizar. */}
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
}

// =============================
// ESTILOS
// =============================

// StyleSheet.create organiza los estilos del componente.
// En React Native no se usa CSS tradicional;
// en su lugar se definen objetos JavaScript con propiedades de estilo.
const styles = StyleSheet.create({
  // Estilo del contenedor principal de toda la pantalla
  container: {
    flex: 1, // Ocupa todo el espacio disponible de la pantalla
    padding: 18, // Espaciado interno general
    backgroundColor: '#F7F1EA', // Fondo beige claro
    justifyContent: 'center', // Centra verticalmente el contenido
  },

  // Estilo de la imagen superior
  image: {
    width: '100%', // Ocupa todo el ancho disponible
    height: 190, // Alto fijo
    borderRadius: 24, // Bordes redondeados
    marginBottom: 18, // Espacio debajo de la imagen
  },

  // Estilo del título principal
  title: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 8,
    color: '#4A3728',
  },

  // Estilo del subtítulo o descripción
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#7C6A5A',
    marginBottom: 20,
    lineHeight: 21,
  },

  // Estilo de los inputs
  input: {
    backgroundColor: '#FFFDF9',
    borderWidth: 1,
    borderColor: '#E7D8C8',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    color: '#4A3728',
    fontSize: 16,
  },

  // Contenedor horizontal de los botones
  row: {
    flexDirection: 'row', // Coloca los hijos en fila
    justifyContent: 'space-between', // Distribuye los botones con espacio entre ellos
    marginTop: 8,
  },

  // Estilo de cada botón de operación
  op: {
    width: '22%', // Hace que entren 4 botones en la misma fila
    backgroundColor: '#B88761',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  // Estilo del texto dentro del botón
  opText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },

  // Estilo del resultado final
  result: {
    marginTop: 22,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    color: '#4A3728',
  },
});