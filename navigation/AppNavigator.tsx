import React from 'react';

// =============================
// IMPORTACIÓN DE NAVEGADORES
// =============================

// createNativeStackNavigator crea un navegador tipo pila.
// Sirve para abrir pantallas una encima de otra, como cuando entras a "Detalle"
// desde la pantalla principal y luego puedes volver atrás.
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// createBottomTabNavigator crea una barra de navegación inferior.
// Esta barra permite cambiar entre secciones principales tocando pestañas.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// createDrawerNavigator crea un menú lateral deslizante.
// Normalmente aparece al abrir el menú hamburguesa o deslizar desde un costado.
import { createDrawerNavigator } from '@react-navigation/drawer';

// Librería de íconos de Expo.
// Se usa aquí para mostrar íconos en las pestañas del menú inferior.
import { Ionicons } from '@expo/vector-icons';


// =============================
// IMPORTACIÓN DE PANTALLAS
// =============================

// Pantalla principal con la lista de perritos.
import HomeScreen from '../screens/HomeScreen';

// Pantalla de detalle que muestra la información completa de un perrito.
import DetailScreen from '../screens/DetailScreen';

// Pantalla de perfil del refugio o voluntariado.
import ProfileScreen from '../screens/ProfileScreen';

// Pantalla de configuración.
import SettingsScreen from '../screens/SettingsScreen';

// Pantalla de calculadora.
import CalculatorScreen from '../screens/CalculatorScreen';

// Pantalla de loading con lista.
import LoadingScreen from '../screens/LoadingScreen';

// Pantalla que muestra un modal.
import ModalScreen from '../screens/ModalScreen';

// Pantalla con dropdown/picker.
import DropdownScreen from '../screens/DropdownScreen';


// =============================
// CREACIÓN DE NAVEGADORES
// =============================

// Se crean las instancias de cada navegador.
// Estas constantes se usan luego para definir qué pantallas contiene cada uno.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


// ======================================================
// NAVEGADOR DE PESTAÑAS INFERIORES
// ======================================================

// Este componente define la barra inferior de navegación.
// Aquí están las pantallas más importantes o de acceso rápido.
function Tabs() {
  return (
    <Tab.Navigator
      // screenOptions aplica configuración general a todas las pantallas del Tab.
      // Como es una función, recibe "route", que representa la pantalla actual.
      screenOptions={({ route }) => ({
        // Oculta el header superior dentro de las tabs.
        // Esto evita que se duplique el encabezado si otro navegador ya muestra uno.
        headerShown: false,

        // Color del ícono y texto cuando la pestaña está activa.
        // Se aplica a la pantalla que el usuario tiene abierta.
        tabBarActiveTintColor: '#B88761',

        // Color del ícono y texto cuando la pestaña no está activa.
        // Se aplica a las pestañas que están visibles pero no seleccionadas.
        tabBarInactiveTintColor: '#9B8A7D',

        // Estilo general de la barra inferior.
        // Aquí cambias color de fondo y la línea superior.
        tabBarStyle: {
          backgroundColor: '#FFFDF9',
          borderTopColor: '#E7D8C8',
        },

        // tabBarIcon define qué ícono se mostrará en cada pestaña.
        // React Navigation pasa automáticamente el color y tamaño adecuados.
        tabBarIcon: ({ color, size }) => {
          // iconName guarda el nombre del ícono que se mostrará.
          // Se deja uno por defecto por seguridad.
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          // Si la pantalla actual se llama "Inicio",
          // entonces usamos el ícono de casa.
          if (route.name === 'Inicio') iconName = 'home-outline';

          // Si la pantalla actual se llama "Calculadora",
          // usamos el ícono de calculadora.
          if (route.name === 'Calculadora') iconName = 'calculator-outline';

          // Si la pantalla actual se llama "Carga",
          // usamos el ícono de reloj de arena.
          if (route.name === 'Carga') iconName = 'hourglass-outline';

          // Se retorna el componente visual del ícono.
          // "name" define cuál ícono dibujar,
          // "size" el tamaño,
          // y "color" el color según si está activa o no la tab.
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Cada Tab.Screen representa una pestaña del menú inferior */}

      {/* Pestaña principal que abre la pantalla Home */}
      <Tab.Screen name="Inicio" component={HomeScreen} />

      {/* Pestaña que abre la calculadora */}
      <Tab.Screen name="Calculadora" component={CalculatorScreen} />

      {/* Pestaña que abre la pantalla de carga */}
      <Tab.Screen name="Carga" component={LoadingScreen} />
    </Tab.Navigator>
  );
}


// ======================================================
// NAVEGADOR LATERAL TIPO DRAWER
// ======================================================

// Este componente crea el menú lateral.
// Desde aquí se accede a varias pantallas secundarias o complementarias.
function MainDrawer() {
  return (
    <Drawer.Navigator
      // screenOptions aplica estilos y comportamiento global a todas las pantallas del drawer.
      screenOptions={{
        // Cambia el fondo del encabezado superior.
        headerStyle: { backgroundColor: '#F7F1EA' },

        // Cambia el color del texto y de los íconos del encabezado.
        headerTintColor: '#4A3728',

        // Cambia el fondo del menú lateral al abrirse.
        drawerStyle: { backgroundColor: '#FFFDF9' },

        // Color de la opción seleccionada actualmente dentro del drawer.
        drawerActiveTintColor: '#B88761',

        // Color de las opciones que no están activas.
        drawerInactiveTintColor: '#7C6A5A',
      }}
    >
      {/* Esta primera opción del drawer no abre una pantalla simple,
          sino otro navegador completo: las Bottom Tabs.
          O sea, cuando el usuario entra a "Inicio", realmente entra al Tab Navigator. */}
      <Drawer.Screen name="Inicio" component={Tabs} />

      {/* Opciones adicionales del menú lateral */}
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Configuración" component={SettingsScreen} />
      <Drawer.Screen name="Modal" component={ModalScreen} />
      <Drawer.Screen name="Dropdown" component={DropdownScreen} />
    </Drawer.Navigator>
  );
}


// ======================================================
// NAVEGADOR PRINCIPAL DE TODA LA APP
// ======================================================

// Este es el componente exportado por defecto.
// Es el que organiza la navegación principal del proyecto.
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Pantalla principal del Stack.
          Aquí no cargas una pantalla visual única, sino el Drawer completo.
          Por eso este screen actúa como la puerta de entrada de la app. */}
      <Stack.Screen
        name="Main"
        component={MainDrawer}
        // Se oculta el header para que no se superponga con el header del Drawer.
        options={{ headerShown: false }}
      />

      {/* Pantalla de detalle.
          Esta sí se abre por encima del flujo principal.
          Por ejemplo, desde HomeScreen puedes hacer navigation.navigate('Detalle', pet)
          y esta pantalla aparecerá como una nueva vista en la pila. */}
      <Stack.Screen name="Detalle" component={DetailScreen} />
    </Stack.Navigator>
  );
}