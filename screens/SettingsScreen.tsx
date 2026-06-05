import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import ScreenHeader from '../components/common/ScreenHeader';
import SettingOption from '../components/settings/SettingOption';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [adoptionAlerts, setAdoptionAlerts] = useState(true);
  const [savedPets, setSavedPets] = useState(true);
  const [location, setLocation] = useState(false);

  return (
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      <ScreenHeader
        title="Configuración del refugio"
        subtitle="Personaliza tu experiencia en Colitas Felices"
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cuenta</Text>

        <SettingOption
          icon="person-outline"
          title="Editar perfil"
          subtitle="Nombre, correo y datos personales"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        <SettingOption
          icon="lock-closed-outline"
          title="Seguridad"
          subtitle="Cambiar contraseña y privacidad"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        <SettingOption
          icon="pin-outline"
          title="Ubicación"
          subtitle="Mostrar refugios cercanos"
          right={
            <Switch
              value={location}
              onValueChange={setLocation}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={location ? COLORS.primary : '#fff'}
            />
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferencias</Text>

        <SettingOption
          icon="notifications-outline"
          title="Notificaciones"
          subtitle="Nuevos perritos y alertas"
          right={
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={notifications ? COLORS.primary : '#fff'}
            />
          }
        />

        <SettingOption
          icon="volume-high-outline"
          title="Sonido"
          subtitle="Efectos y avisos"
          right={
            <Switch
              value={sound}
              onValueChange={setSound}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={sound ? COLORS.primary : '#fff'}
            />
          }
        />

        <SettingOption
          icon="moon-outline"
          title="Modo oscuro"
          subtitle="Apariencia de la app"
          right={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={darkMode ? COLORS.primary : '#fff'}
            />
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Adopción</Text>

        <SettingOption
          icon="paw-outline"
          title="Alertas de adopción"
          subtitle="Recibe novedades de nuevos perritos"
          right={
            <Switch
              value={adoptionAlerts}
              onValueChange={setAdoptionAlerts}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={adoptionAlerts ? COLORS.primary : '#fff'}
            />
          }
        />

        <SettingOption
          icon="heart-outline"
          title="Perritos guardados"
          subtitle="Mostrar favoritos en el inicio"
          right={
            <Switch
              value={savedPets}
              onValueChange={setSavedPets}
              trackColor={{ false: '#D9C8B8', true: '#DDB89C' }}
              thumbColor={savedPets ? COLORS.primary : '#fff'}
            />
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ayuda</Text>

        <SettingOption
          icon="help-circle-outline"
          title="Centro de ayuda"
          subtitle="Preguntas frecuentes"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        <SettingOption
          icon="chatbubble-ellipses-outline"
          title="Contactar refugio"
          subtitle="Escribir al equipo"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />

        <SettingOption
          icon="document-text-outline"
          title="Políticas"
          subtitle="Términos y privacidad"
          right={<Ionicons name="chevron-forward" size={18} color="#A08F81" />}
        />
      </View>

      <Pressable style={styles.logoutBtn}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: 18,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 10,
  },
  logoutBtn: {
    marginTop: 4,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 16,
    paddingVertical: 14,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 15,
  },
});