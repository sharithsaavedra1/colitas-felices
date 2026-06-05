import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Componente principal de la pantalla de configuración
export default function SettingsScreen() {
  // ==================================================
  // ESTADOS
  // ==================================================

  // Cada estado booleano representa una preferencia del usuario.
  // true = activado
  // false = desactivado

  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [adoptionAlerts, setAdoptionAlerts] = useState(true);
  const [savedPets, setSavedPets] = useState(true);
  const [location, setLocation] = useState(false);

  // ==================================================
  // COMPONENTE REUTILIZABLE
  // ==================================================

  // Este componente se usa para crear una fila de configuración
  // sin repetir la misma estructura muchas veces.
  //
  // Props:
  // - icon: nombre del icono de Ionicons
  // - title: título principal de la opción
  // - subtitle: texto secundario explicativo
  // - right: componente que aparece a la derecha (Switch o flecha)
  // - onPress: función opcional que se ejecuta al tocar la fila
  const Option = ({ icon, title, subtitle, right, onPress }: any) => (
    <Pressable style={styles.row} onPress={onPress}>
      {/* Parte izquierda de la fila: icono + textos */}
      <View style={styles.rowLeft}>
        <View style={styles.iconBox}>
          {/* Icono visual que representa la opción */}
          <Ionicons name={icon} size={20} color="#B88761" />
        </View>

        {/* Bloque de texto con título y subtítulo */}
        <View style={{ flex: 1 }}>
          <Text style={styles.rowTitle}>{title}</Text>
          <Text style={styles.rowSubtitle}>{subtitle}</Text>
        </View>
      </View>

      {/* Parte derecha:
          Puede mostrar una flecha o un Switch */}
      {right}
    </Pressable>
  );

  // ==================================================
  // INTERFAZ
  // ==================================================

  return (
    // ScrollView permite desplazarse verticalmente
    // cuando hay muchas opciones en la pantalla.
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      {/* ===============================================
          ENCABEZADO
         =============================================== */}
      <View style={styles.header}>
        <Text style={styles.title}>Configuración del refugio</Text>
        <Text style={styles.subtitle}>
          Personaliza tu experiencia en Colitas Felices
        </Text>
      </View>

      {/* ===============================================
          SECCIÓN: CUENTA
         =============================================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cuenta</Text>

        {/* Opción visual preparada para navegación */}
        <Option
          icon="person-outline"
          title="Editar perfil"
          subtitle="Nombre, correo y datos personales"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        {/* Opción visual preparada para navegación */}
        <Option
          icon="lock-closed-outline"
          title="Seguridad"
          subtitle="Cambiar contraseña y privacidad"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        {/* Opción con Switch para activar o desactivar ubicación */}
        <Option
          icon="pin-outline"
          title="Ubicación"
          subtitle="Mostrar refugios cercanos"
          right={
            <Switch
              value={location}
              onValueChange={setLocation}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={location ? '#B88761' : '#fff'}
            />
          }
        />
      </View>

      {/* ===============================================
          SECCIÓN: PREFERENCIAS
         =============================================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferencias</Text>

        {/* Activar o desactivar notificaciones */}
        <Option
          icon="notifications-outline"
          title="Notificaciones"
          subtitle="Nuevos perritos y alertas"
          right={
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={notifications ? '#B88761' : '#fff'}
            />
          }
        />

        {/* Activar o desactivar sonido */}
        <Option
          icon="volume-high-outline"
          title="Sonido"
          subtitle="Efectos y avisos"
          right={
            <Switch
              value={sound}
              onValueChange={setSound}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={sound ? '#B88761' : '#fff'}
            />
          }
        />

        {/* Activar o desactivar modo oscuro */}
        <Option
          icon="moon-outline"
          title="Modo oscuro"
          subtitle="Apariencia de la app"
          right={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={darkMode ? '#B88761' : '#fff'}
            />
          }
        />
      </View>

      {/* ===============================================
          SECCIÓN: ADOPCIÓN
         =============================================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Adopción</Text>

        {/* Alertas relacionadas con nuevos perritos */}
        <Option
          icon="paw-outline"
          title="Alertas de adopción"
          subtitle="Recibe novedades de nuevos perritos"
          right={
            <Switch
              value={adoptionAlerts}
              onValueChange={setAdoptionAlerts}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={adoptionAlerts ? '#B88761' : '#fff'}
            />
          }
        />

        {/* Mostrar u ocultar favoritos en el inicio */}
        <Option
          icon="heart-outline"
          title="Perritos guardados"
          subtitle="Mostrar favoritos en el inicio"
          right={
            <Switch
              value={savedPets}
              onValueChange={setSavedPets}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={savedPets ? '#B88761' : '#fff'}
            />
          }
        />
      </View>

      {/* ===============================================
          SECCIÓN: AYUDA
         =============================================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ayuda</Text>

        {/* Opciones pensadas para futuras pantallas */}
        <Option
          icon="help-circle-outline"
          title="Centro de ayuda"
          subtitle="Preguntas frecuentes"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        <Option
          icon="chatbubble-ellipses-outline"
          title="Contactar refugio"
          subtitle="Escribir al equipo"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        <Option
          icon="document-text-outline"
          title="Políticas"
          subtitle="Términos y privacidad"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />
      </View>

      {/* ===============================================
          BOTÓN FINAL
         =============================================== */}

      {/* Botón de cerrar sesión.
          En este código aún no tiene lógica en onPress,
          pero visualmente ya está preparado. */}
      <Pressable style={styles.logoutBtn}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  // Fondo general de la pantalla
  bg: {
    flex: 1,
    backgroundColor: '#F7F1EA',
  },

  // Espaciado interno del contenido desplazable
  container: {
    padding: 18,
    paddingBottom: 30,
  },

  // Encabezado superior
  header: {
    marginBottom: 16,
  },

  // Título principal
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Subtítulo descriptivo
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#7C6A5A',
  },

  // Contenedor de cada sección
  section: {
    marginBottom: 18,
  },

  // Título de sección
  sectionTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#4A3728',
    marginBottom: 10,
  },

  // Fila individual de opción
  row: {
    backgroundColor: '#FFFDF9',
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

  // Parte izquierda de la fila
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },

  // Caja decorativa del icono
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F2E6DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  // Texto principal de la fila
  rowTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#4A3728',
  },

  // Texto secundario de la fila
  rowSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: '#8B7766',
  },

  // Botón inferior de cerrar sesión
  logoutBtn: {
    marginTop: 4,
    backgroundColor: '#B88761',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 16,
    paddingVertical: 14,
  },

  // Texto del botón final
  logoutText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 15,
  },
});