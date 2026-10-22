import { useEffect, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <HomeScreen />;
}
