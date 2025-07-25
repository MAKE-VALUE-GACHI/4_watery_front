import tabsStyles from "@/app/(tabs)/index.styles";
import { BN1, C1 } from "@/components/ThemedText";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
        <ScrollView style={tabsStyles.mainContainer}>
          <BlurView style={tabsStyles.mainHeader} intensity={100} tint={"default"}>
            <ThemedView style={tabsStyles.headerDesc}>
              <BN1 lightColor={Colors.neutral_600} style={{ fontWeight: "bold" }}>
                오늘의 목표 수분
              </BN1>
              <TouchableOpacity style={tabsStyles.toSettingsButton}>
                <C1 lightColor={Colors.primary_700} style={{ fontWeight: "bold" }}>
                  개인설정
                </C1>
                <MaterialIcons name={"chevron-right"} color={Colors.primary_300} size={16} />
              </TouchableOpacity>
            </ThemedView>
          </BlurView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
