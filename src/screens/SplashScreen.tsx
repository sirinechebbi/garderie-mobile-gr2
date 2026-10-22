import { Image, StyleSheet, Text, View } from "react-native";
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/garderie.webp")}
        style={styles.image}
      />
      <Text style={styles.title}>MA Garderie</Text>
      <Text style={styles.text}>Bienvenue dans notre garderiie</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    
  },
  title: { fontWeight: "bold", fontSize: 22 },
  text: { fontSize: 18 },
});
