import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Menu } from '../donnees/menu';

type Props = {
  menu: Menu;
  onPress: () => void;
};

export default function MenuCard({ menu, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{menu.icone}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{menu.titre}</Text>
        <Text style={styles.desc}>{menu.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 14,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: { fontSize: 34, marginRight: 16 },
  title: { fontSize: 17, fontWeight: '600' },
  desc: { fontSize: 14, color: '#666', marginTop: 2 },
});