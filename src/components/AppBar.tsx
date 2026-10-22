import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  onMenuPress: () => void;
  onSearchPress: () => void;
  onNotificationsPress: () => void;
};

export default function AppBar({ onMenuPress, onSearchPress, onNotificationsPress }: Props) {
  return (
    <View style={styles.bar}>
      <Pressable onPress={onMenuPress} style={styles.btn}>
        <Text style={styles.icon}>🏠</Text>
      </Pressable>
      <Text style={styles.title}>Ma Garderie</Text>
      <Pressable onPress={onSearchPress} style={styles.btn}>
        <Text style={styles.icon}>⌕</Text>
      </Pressable>
      <Pressable onPress={onNotificationsPress} style={styles.btn}>
        <Text style={styles.icon}>🔔</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#130bf5',
    padding: 12,
  },
  title: { flex: 1, color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 8 },
  btn: { padding: 6 },
  icon: { fontSize: 24 },
});