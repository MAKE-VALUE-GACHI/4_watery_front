import CustomButton from "@/components/CustomButton/CustomButton";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { H1, H2, HL1, HL2, T1, T2, T3 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import "nativewind";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { CustomTab } from "@/components/CustomTab";
import { CustomToggle } from "@/components/CustomToggle";
import CustomSlide from "@/components/CustomSlide/CustomSlide";
import CustomSlider from "@/components/CustomSlider/CustomSlider";

type TabType = "전체" | "물" | "커피" | "녹차";

export default function HomeScreen() {
  const [sliderVal, setSliderVal] = useState(500);

  const [selectedTab, setSelectedTab] = useState<TabType>("전체");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <T1>Welcome</T1>
        <HelloWave />
      </ThemedView>

      {/* 공용 컴포넌트 - Tab */}
      <ThemedView style={{ gap: 10 }}>
        <CustomTab selectedTab={selectedTab} onSelectTab={setSelectedTab} />
        <CustomTab
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
          visibleTabs={["물", "커피", "녹차"]}
        />
      </ThemedView>

      {/* 공용 컴포넌트 - Toggle */}
      <ThemedView style={{ gap: 10 }}>
        <CustomToggle value={isEnabled} onValueChange={setIsEnabled} />
      </ThemedView>

      <CustomSlide beverageVariant={"coffee"} />

      {/* 시연 이후 삭제 예정*/}
      <ThemedView style={{ gap: 10 }}>
        <CustomButton title={"PRIMARY(DEFAULT)"} variant={"primary"} />
        <CustomButton title={"SECONDARY"} variant={"secondary"} />
        <CustomButton title={"TERTIARY"} variant={"tertiary"} />
        <CustomButton title={"WARNING"} variant={"warning"} />
      </ThemedView>

      <ThemedView>
        <CustomSlider
          sliderVal={sliderVal}
          onValueChange={(val) => setSliderVal(val[0])}
          step={50}
          animationType={"spring"}
          maximumValue={1000}
          minimumValue={0}
        />
      </ThemedView>

      <ThemedView>
        <T1>Title1</T1>
        <T2>Title2</T2>
        <T3>Title3</T3>
        <H1>Heading1</H1>
        <H2>Heading2</H2>
        <HL1>Headline1</HL1>
        <HL2>Headline2</HL2>
        <MaterialIcons name="star" size={50} color="#ff0000" />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
