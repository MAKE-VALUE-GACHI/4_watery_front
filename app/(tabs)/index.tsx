import { HelloWave } from "@/components/HelloWave";
import { T1 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tabsStyles from "@/app/(tabs)/index.styles";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 1040;
const bgHeight = (screenWidth / DESIGN_WIDTH) * DESIGN_HEIGHT;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("assets/images/main-bg.png")}
      style={{ width: screenWidth, height: bgHeight }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={tabsStyles.pageContainer}>
          <ThemedView style={tabsStyles.titleContainer}>
            <T1>Welcome</T1>
            <HelloWave />
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
