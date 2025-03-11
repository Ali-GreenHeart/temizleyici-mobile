import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "./global.css";
import AuthProvider from "@/context/AuthProvider";
import { ToastProvider } from "expo-toast";



export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Lexend-Bold": require("../assets/fonts/Lexend-Bold.ttf"),
    "Lexend-ExtraBold": require("../assets/fonts/Lexend-ExtraBold.ttf"),
    "Lexend-Light": require("../assets/fonts/Lexend-Light.ttf"),
    "Lexend-Medium": require("../assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Regular": require("../assets/fonts/Lexend-Regular.ttf"),
    "Lexend-SemiBold": require("../assets/fonts/Lexend-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <ToastProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
}
