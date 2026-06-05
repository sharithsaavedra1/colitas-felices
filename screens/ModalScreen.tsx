import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Este componente representa una pantalla que contiene
// un botón para abrir un modal informativo.
export default function ModalScreen() {
  // ==================================================
  // ESTADO
  // ==================================================

  // "visible" controla si el modal está abierto o cerrado.
  // false = oculto
  // true = visible
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Título principal de la pantalla */}
      <Text style={styles.title}>Aviso del refugio</Text>

      {/* Subtítulo con contexto para el usuario */}
      <Text style={styles.subtitle}>
        Información importante para adoptar y cuidar perritos
      </Text>

      {/* ==================================================
          BOTÓN DE APERTURA
         ================================================== */}

      {/* Al presionar este botón, el estado cambia a true
          y el modal se muestra */}
      <Pressable style={styles.openBtn} onPress={() => setVisible(true)}>
        <Ionicons name="paw-outline" size={18} color="#fff" />
        <Text style={styles.openText}>Abrir mensaje</Text>
      </Pressable>

      {/* ==================================================
          MODAL
         ================================================== */}

      <Modal
        // Hace que el fondo del modal sea transparente,
        // para que podamos ver el overlay semitransparente que dibujamos manualmente.
        transparent

        // Controla si el modal está visible o no.
        visible={visible}

        // Define la animación de entrada/salida del modal.
        animationType="fade"

        // onRequestClose es importante especialmente en Android.
        // Se ejecuta cuando el usuario intenta cerrar el modal con el botón físico de atrás.
        onRequestClose={() => setVisible(false)}
      >
        {/* Fondo oscuro detrás del modal para enfocar la atención del usuario */}
        <View style={styles.overlay}>
          {/* Tarjeta visual principal del modal */}
          <View style={styles.modalCard}>
            {/* ScrollView permite recorrer el contenido si el modal es alto */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalContent}
            >
              {/* Imagen superior */}
              <View style={styles.imageWrap}>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/1200x/ab/95/57/ab9557e1791d014a763636822b714121.jpg',
                  }}
                  style={styles.image}
                />
              </View>

              {/* Título principal dentro del modal */}
              <Text style={styles.modalTitle}>¡Bienvenido a Colitas Felices!</Text>

              {/* Mensaje largo de información */}
              <Text style={styles.modalText}>
                Cada adopción cambia una vida. Antes de llevarte un perrito,
                asegúrate de ofrecerle tiempo, cariño y un hogar responsable.
              </Text>

              {/* ==================================================
                  BLOQUES INFORMATIVOS
                 ================================================== */}

              <View style={styles.infoRow}>
                <View style={styles.infoBox}>
                  <Ionicons name="heart-outline" size={18} color="#B88761" />
                  <Text style={styles.infoText}>Adopción responsable</Text>
                </View>

                <View style={styles.infoBox}>
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={18}
                    color="#B88761"
                  />
                  <Text style={styles.infoText}>Cuidado y bienestar</Text>
                </View>
              </View>

              {/* ==================================================
                  RECOMENDACIONES
                 ================================================== */}

              <View style={styles.tips}>
                <Text style={styles.tipsTitle}>Recomendaciones</Text>
                <Text style={styles.tip}>• Mantén agua limpia y comida adecuada.</Text>
                <Text style={styles.tip}>• Dale paseos y tiempo de calidad.</Text>
                <Text style={styles.tip}>• Visita al veterinario regularmente.</Text>
              </View>

              {/* ==================================================
                  BOTONES DE CIERRE
                 ================================================== */}

              <View style={styles.actions}>
                {/* Botón secundario para cerrar */}
                <Pressable style={styles.closeBtn} onPress={() => setVisible(false)}>
                  <Text style={styles.buttonText}>Cerrar</Text>
                </Pressable>

                {/* Botón principal para confirmar y cerrar */}
                <Pressable style={styles.acceptBtn} onPress={() => setVisible(false)}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={18}
                    color="#fff"
                  />
                  <Text style={styles.buttonText}>Entendido</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// ==================================================
// ESTILOS
// ==================================================

const styles = StyleSheet.create({
  // Contenedor principal de la pantalla base
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#F7F1EA',
  },

  // Título principal
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A3728',
    textAlign: 'center',
  },

  // Subtítulo
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#7C6A5A',
    textAlign: 'center',
    marginBottom: 22,
  },

  // Botón que abre el modal
  openBtn: {
    backgroundColor: '#B88761',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  // Texto del botón de apertura
  openText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 15,
  },

  // Fondo oscuro detrás del modal
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },

  // Tarjeta del modal
  modalCard: {
    width: '100%',
    maxHeight: '88%',
    backgroundColor: '#FFFDF9',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },

  // Contenedor interno del ScrollView del modal
  modalContent: {
    paddingBottom: 18,
  },

  // Envoltura de la imagen
  imageWrap: {
    padding: 14,
    paddingBottom: 0,
  },

  // Imagen superior del modal
  image: {
    width: '100%',
    height: 210,
    borderRadius: 22,
  },

  // Título del modal
  modalTitle: {
    marginTop: 16,
    paddingHorizontal: 18,
    fontSize: 24,
    fontWeight: '900',
    color: '#4A3728',
  },

  // Texto principal del modal
  modalText: {
    paddingHorizontal: 18,
    marginTop: 10,
    fontSize: 15,
    color: '#7C6A5A',
    lineHeight: 22,
  },

  // Fila de cajas informativas
  infoRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
    marginTop: 16,
  },

  // Caja individual de información
  infoBox: {
    flex: 1,
    backgroundColor: '#F2E6DB',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 6,
  },

  // Texto dentro de cada caja informativa
  infoText: {
    fontSize: 12,
    color: '#4A3728',
    fontWeight: '800',
    textAlign: 'center',
  },

  // Bloque de recomendaciones
  tips: {
    marginTop: 16,
    marginHorizontal: 18,
    backgroundColor: '#F7F1EA',
    borderRadius: 20,
    padding: 16,
  },

  // Título del bloque de recomendaciones
  tipsTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4A3728',
    marginBottom: 8,
  },

  // Cada recomendación individual
  tip: {
    fontSize: 14,
    color: '#7C6A5A',
    marginBottom: 6,
    lineHeight: 20,
  },

  // Contenedor de los botones finales
  actions: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 18,
    marginTop: 18,
  },

  // Botón secundario de cierre
  closeBtn: {
    flex: 1,
    backgroundColor: '#E7D8C8',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },

  // Botón principal de confirmación
  acceptBtn: {
    flex: 1,
    backgroundColor: '#B88761',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },

  // Texto compartido de ambos botones
  buttonText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 14,
  },
});