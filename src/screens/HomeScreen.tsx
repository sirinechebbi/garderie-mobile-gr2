import { useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/AppBar";
import AppDrawer from "../components/AppDrawer";
import MenuCard from "../components/MenuCard";
import { menus } from "../donnees/menu";

export default function HomeScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const message = (texte: string) => Alert.alert("Ma Garderie", texte);

  const choisirEntree = (nom: string) => {
    setDrawerOpen(false);
    setTimeout(() => message(nom), 300);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <AppBar
        onMenuPress={() => setDrawerOpen(true)}
        onSearchPress={() => message("Rechercher un menu")}
        onNotificationsPress={() => message("Aucune notification")}
      />

      <Text style={styles.sectionTitle}>Menus du jour</Text>

      <FlatList
        data={menus}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <MenuCard menu={item} onPress={() => message(item.titre)} />
        )}
      />

      <Pressable style={styles.fab} onPress={() => message("Ajouter un menu")}>
        <Text style={styles.fabIcon}>+</Text>
      </Pressable>

      <AppDrawer
        visible={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelect={choisirEntree}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  sectionTitle: { fontSize: 22, fontWeight: "bold", margin: 16 },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#0b17f5",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  fabIcon: { color: "#fff", fontSize: 32, lineHeight: 36, fontWeight: "300" },
});
