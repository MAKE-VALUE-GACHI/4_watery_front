import React, { useEffect } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { initializeKakaoSDK } from "@react-native-kakao/core";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const kakaoNativeAppKey = process.env.EXPO_PUBLIC_NATIVE_APP_KEY || "";

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  useEffect(() => {
    initializeKakaoSDK(kakaoNativeAppKey);
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer>
        {/*<Stack initialRouteName="splash">*/}
        {/*  <Stack.Screen name="splash" options={{ headerShown: false }} />*/}
        {/*  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />*/}
        {/*  <Stack.Screen name="+not-found" />*/}
        {/*</Stack>*/}
        <Stack screenOptions={{ headerShown: false }} />
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
