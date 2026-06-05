import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

// Este componente representa la pantalla de perfil.
export default function ProfileScreen() {
  return (
    // ==================================================
    // FONDO GENERAL
    // ==================================================

    // ImageBackground permite colocar una imagen detrás del contenido.
    // Aquí se usa un patrón repetido de huellitas para decorar toda la pantalla.
    <ImageBackground
      source={{ uri: 'https://www.transparenttextures.com/patterns/paw-print.png' }}
      resizeMode="repeat"
      style={styles.bg}
      imageStyle={styles.pattern}
    >
      {/* ScrollView permite desplazar el contenido si no cabe completo */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* ==================================================
            ENCABEZADO DEL PERFIL
           ================================================== */}
        <View style={styles.header}>
          {/* Bloque decorativo superior */}
          <View style={styles.lilacBlob} />

          {/* Avatar dentro de un contenedor circular */}
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' }}
              style={styles.avatar}
            />
          </View>

          {/* Nombre principal */}
          <Text style={styles.name}>Voluntariado Canino</Text>

          {/* Rol o subtítulo */}
          <Text style={styles.role}>Refugio Colitas Felices</Text>

          {/* Descripción breve */}
          <Text style={styles.bio}>
            Conectando perritos con familias responsables, cuidando su bienestar
            y ayudando a encontrar hogares amorosos.
          </Text>
        </View>

        {/* ==================================================
            DATOS PERSONALES
           ================================================== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Datos personales</Text>

          {/* Tarjeta individual */}
          <View style={styles.card}>
            <Text style={styles.label}>Nombre</Text>
            <Text style={styles.value}>Sharith</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Rol</Text>
            <Text style={styles.value}>Voluntaria / Rescate animal</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Correo</Text>
            <Text style={styles.value}>sharith@colitasfelices.com</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Ubicación</Text>
            <Text style={styles.value}>Área de adopciones</Text>
          </View>
        </View>

        {/* ==================================================
            ESTADÍSTICAS
           ================================================== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estadísticas del refugio</Text>

          {/* Fila de tres cajas */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>18</Text>
              <Text style={styles.statText}>Perritos</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statText}>Adoptados</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statText}>En espera</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Fondo principal de toda la pantalla
  bg: {
    flex: 1,
    backgroundColor: '#F7F1EA',
  },

  // Estilo aplicado específicamente a la imagen de fondo
  pattern: {
    opacity: 0.08,
  },

  // Contenedor interno del ScrollView
  container: {
    paddingBottom: 28,
  },

  // Encabezado principal
  header: {
    alignItems: 'center',
    paddingTop: 18,
    paddingHorizontal: 18,
    paddingBottom: 24,
    backgroundColor: 'transparent',
  },

  // Bloque decorativo superior
  lilacBlob: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 190,
    backgroundColor: '#DCCEF6',
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
  },

  // Círculo que envuelve el avatar
  avatarWrap: {
    marginTop: 70,
    backgroundColor: '#FFFDF9',
    padding: 6,
    borderRadius: 999,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  // Imagen del avatar
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
  },

  // Nombre principal
  name: {
    marginTop: 14,
    fontSize: 24,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Rol o cargo
  role: {
    marginTop: 4,
    fontSize: 15,
    color: '#B88761',
    fontWeight: '800',
  },

  // Biografía breve
  bio: {
    marginTop: 12,
    fontSize: 14,
    color: '#7C6A5A',
    textAlign: 'center',
    lineHeight: 21,
    paddingHorizontal: 8,
  },

  // Sección general
  section: {
    paddingHorizontal: 18,
    marginTop: 18,
  },

  // Título de sección
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#4A3728',
    marginBottom: 12,
  },

  // Tarjeta de información
  card: {
    backgroundColor: '#FFFDF9',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  // Etiqueta pequeña de cada campo
  label: {
    fontSize: 13,
    color: '#9B8A7D',
    marginBottom: 4,
    fontWeight: '700',
  },

  // Valor principal del campo
  value: {
    fontSize: 16,
    color: '#4A3728',
    fontWeight: '800',
  },

  // Fila de estadísticas
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },

  // Caja individual de estadística
  statBox: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  // Número principal de la estadística
  statNumber: {
    fontSize: 22,
    fontWeight: '900',
    color: '#B88761',
  },

  // Texto secundario de la estadística
  statText: {
    marginTop: 4,
    fontSize: 13,
    color: '#7C6A5A',
    fontWeight: '700',
  },
});