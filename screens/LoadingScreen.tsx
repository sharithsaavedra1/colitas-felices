import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ==================================================
// DATOS DE EJEMPLO
// ==================================================

// Se crea un arreglo con 12 elementos usando Array.from.
// Cada elemento será un texto como "Proceso 1", "Proceso 2", etc.
// Esta será la información que se mostrará después de la carga.
const data = Array.from({ length: 12 }, (_, i) => `Proceso ${i + 1}`);


// ==================================================
// COMPONENTE INTERNO: LOADER ANIMADO
// ==================================================

// PawLoader es un componente visual reutilizable.
// Su trabajo es dibujar una huella animada mientras la pantalla está cargando.
function PawLoader() {
  // ==========================================
  // VALORES ANIMADOS
  // ==========================================

  // scale controla el tamaño de la huella.
  // Empieza en 1, o sea, tamaño normal.
  const scale = useRef(new Animated.Value(1)).current;

  // opacity controla la transparencia.
  // Empieza en 0.7 para que la huella ya se vea, pero ligeramente tenue.
  const opacity = useRef(new Animated.Value(0.7)).current;

  // rotate controla la rotación.
  // Empieza en 0 y luego se interpolará a grados.
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // ==========================================
    // DEFINICIÓN DE LA ANIMACIÓN
    // ==========================================

    // Animated.loop hace que toda la animación se repita indefinidamente.
    // Dentro usamos Animated.parallel para ejecutar varias animaciones al mismo tiempo.
    const loop = Animated.loop(
      Animated.parallel([
        // ------------------------------------------
        // ANIMACIÓN DE ESCALA
        // ------------------------------------------
        // Primero la huella crece un poco (1 -> 1.15),
        // luego vuelve a su tamaño original (1.15 -> 1).
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

        // ------------------------------------------
        // ANIMACIÓN DE OPACIDAD
        // ------------------------------------------
        // La huella se vuelve más visible (0.7 -> 1)
        // y luego baja un poco otra vez (1 -> 0.7).
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

        // ------------------------------------------
        // ANIMACIÓN DE ROTACIÓN
        // ------------------------------------------
        // El valor numérico va de 0 a 1.
        // Después ese valor se transformará en grados usando interpolate.
        Animated.timing(rotate, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    );

    // Empieza la animación en cuanto el componente aparece en pantalla.
    loop.start();

    // cleanup:
    // cuando el componente se desmonta, detenemos el loop
    // para evitar animaciones corriendo en segundo plano.
    return () => loop.stop();
  }, [opacity, rotate, scale]);

  // ==========================================
  // INTERPOLACIÓN DE ROTACIÓN
  // ==========================================

  // rotate vale numéricamente entre 0 y 1,
  // pero transform: rotate necesita strings como "8deg".
  // interpolate convierte ese rango numérico en grados.
  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-8deg', '8deg'],
  });

  return (
    // Animated.View es igual que View,
    // pero acepta estilos animados como scale, rotate y opacity.
    <Animated.View
      style={[
        styles.pawWrap,
        {
          transform: [{ scale }, { rotate: spin }],
          opacity,
        },
      ]}
    >
      {/* Ícono visual de huella */}
      <Ionicons name="paw" size={54} color="#B88761" />
    </Animated.View>
  );
}


// ==================================================
// PANTALLA PRINCIPAL
// ==================================================

export default function LoadingScreen() {
  // loading decide qué se muestra:
  // - true: aparece el loader
  // - false: aparece la lista
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout simula una carga de 1400 ms.
    // Después de ese tiempo, loading cambia a false.
    const t = setTimeout(() => setLoading(false), 1400);

    // cleanup:
    // si el componente se desmonta antes de terminar el tiempo,
    // se limpia el temporizador para evitar errores.
    return () => clearTimeout(t);
  }, []);

  // Mientras loading sea true, se retorna solo la pantalla de carga.
  if (loading) {
    return (
      <View style={styles.center}>
        <View style={styles.loaderCard}>
          <PawLoader />
          <Text style={styles.text}>Cargando contenido...</Text>
          <Text style={styles.subtext}>Preparando todo para ti</Text>
        </View>
      </View>
    );
  }

  // Cuando loading pasa a false, se muestra la lista.
  return (
    <View style={styles.container}>
      <FlatList
        // Datos a renderizar
        data={data}

        // Clave única de cada elemento
        keyExtractor={(item) => item}

        // Cómo se dibuja cada elemento de la lista
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}

        // Espacio al final de la lista
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}


// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  // Pantalla centrada del loader
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F1EA',
    padding: 18,
  },

  // Tarjeta que contiene el loader y los textos
  loaderCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFDF9',
    borderRadius: 28,
    paddingVertical: 30,
    paddingHorizontal: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E7D8C8',
  },

  // Círculo visual donde vive la huella animada
  pawWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#F2E6DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  // Texto principal de carga
  text: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Subtexto de apoyo
  subtext: {
    marginTop: 6,
    fontSize: 13,
    color: '#7C6A5A',
    textAlign: 'center',
  },

  // Contenedor de la lista final
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F7F1EA',
  },

  // Estilo de cada proceso de la lista
  item: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#FFFDF9',
    borderRadius: 14,
    color: '#4A3728',
    fontWeight: '700',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
});