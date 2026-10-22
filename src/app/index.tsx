import { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  return showSplash ? <SplashScreen /> : <HomeScreen />;
}
