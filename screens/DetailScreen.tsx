import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';

// Este componente representa la pantalla de detalle.
// Recibe dos props importantes desde React Navigation:
// 1. route: contiene información de la ruta actual y los parámetros enviados.
// 2. navigation: permite navegar entre pantallas, por ejemplo volver atrás.
export default function DetailScreen({ route, navigation }: any) {
  // ==================================================
  // RECEPCIÓN DE PARÁMETROS
  // ==================================================

  // route.params contiene los datos enviados desde otra pantalla.
  // En este caso, desde HomeScreen se envió el objeto "pet"
  // usando algo como: navigation.navigate('Detalle', pet)
  //
  // Eso significa que aquí "pet" tendrá propiedades como:
  // pet.img, pet.name, pet.age, pet.breed, pet.sex, pet.size, pet.description
  const pet = route.params;

  // ==================================================
  // INTERFAZ VISUAL
  // ==================================================

  return (
    // ScrollView permite que todo el contenido pueda desplazarse verticalmente.
    // Esto es útil porque la pantalla tiene imagen, muchos textos y un botón,
    // y en algunos dispositivos podría no caber completo.
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      {/* Tarjeta principal que agrupa todo el detalle del perrito */}
      <View style={styles.card}>
        {/* Imagen principal del perrito.
            source={{ uri: pet.img }} le dice a React Native
            que la imagen viene desde una URL remota. */}
        <Image source={{ uri: pet.img }} style={styles.image} />

        {/* Contenedor interno para el contenido textual y el botón */}
        <View style={styles.body}>
          {/* Nombre del perrito en tamaño destacado */}
          <Text style={styles.title}>{pet.name}</Text>

          {/* Datos básicos recibidos desde la pantalla anterior */}
          <Text style={styles.text}>Edad: {pet.age}</Text>
          <Text style={styles.text}>Raza: {pet.breed}</Text>
          <Text style={styles.text}>Sexo: {pet.sex}</Text>
          <Text style={styles.text}>Tamaño: {pet.size}</Text>

          {/* Estado informativo fijo.
              Este valor no viene en los parámetros;
              está escrito directamente dentro de la pantalla. */}
          <Text style={styles.text}>Estado: Disponible para adopción</Text>

          {/* Título de la sección descriptiva */}
          <Text style={styles.aboutTitle}>Sobre {pet.name}</Text>

          {/* Descripción larga del perrito */}
          <Text style={styles.about}>{pet.description}</Text>

          {/* Botón para regresar a la pantalla anterior.
              navigation.goBack() hace que el Stack vuelva a la vista anterior. */}
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Volver</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  // Fondo general del ScrollView
  bg: {
    backgroundColor: '#F7F1EA',
  },

  // Espaciado interno del contenido del ScrollView
  container: {
    padding: 18,
    paddingBottom: 28,
  },

  // Tarjeta principal que envuelve la imagen y la información
  card: {
    backgroundColor: '#FFFDF9',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  // Imagen principal del detalle
  image: {
    width: '100%',
    height: 330,
  },

  // Contenedor del contenido textual
  body: {
    padding: 18,
  },

  // Nombre grande del perrito
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#4A3728',
    marginBottom: 10,
  },

  // Estilo general de los datos básicos
  text: {
    fontSize: 15,
    color: '#7C6A5A',
    marginBottom: 4,
  },

  // Título de la sección de descripción
  aboutTitle: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Texto descriptivo largo
  about: {
    marginTop: 8,
    fontSize: 15,
    color: '#7C6A5A',
    lineHeight: 22,
  },

  // Botón de volver
  button: {
    marginTop: 18,
    backgroundColor: '#B88761',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  // Texto del botón
  buttonText: {
    color: '#fff',
    fontWeight: '900',
  },
});