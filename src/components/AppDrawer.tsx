import React from 'react';
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (nom: string) => void;
};

const entrees = [
  { nom: 'Accueil', emoji: '🏠' },
  { nom: 'Menus', emoji: '🍽️' },
  { nom: 'À propos', emoji: 'ℹ️' },
];

export default function AppDrawer({ visible, onClose, onSelect }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.drawer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Ma Garderie</Text>
          </View>
          {entrees.map((e) => (
            <Pressable key={e.nom} style={styles.item} onPress={() => onSelect(e.nom)}>
              <Text style={styles.emoji}>{e.emoji}</Text>
              <Text style={styles.itemText}>{e.nom}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)' },
  drawer: { width: 270, backgroundColor: '#fff' },
  header: { backgroundColor: '#320bf5', padding: 24, paddingTop: 48 },
  headerText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  item: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  emoji: { fontSize: 24 },
  itemText: { fontSize: 17, marginLeft: 16 },
});