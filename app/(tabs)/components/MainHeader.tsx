import { ThemedView } from "@/components/ThemedView";
import { BN1, C1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BlurView } from "expo-blur";
import React from "react";
import mainHeaderStyles from "@/app/(tabs)/components/MainHeader.styles";

const MainHeader = () => {
  return (
    <BlurView style={mainHeaderStyles.mainHeader} intensity={100} tint={"default"}>
      <ThemedView style={mainHeaderStyles.headerDesc}>
        <BN1 lightColor={Colors.neutral_600} style={{ fontWeight: "bold" }}>
          오늘의 목표 수분
        </BN1>
        <TouchableOpacity style={mainHeaderStyles.toSettingsButton}>
          <C1 lightColor={Colors.primary_700} style={{ fontWeight: "bold" }}>
            개인설정
          </C1>
          <MaterialIcons name={"chevron-right"} color={Colors.primary_300} size={16} />
        </TouchableOpacity>
      </ThemedView>
    </BlurView>
  );
};

export default MainHeader;
