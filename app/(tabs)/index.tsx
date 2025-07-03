import CustomButton from "@/components/CustomButton";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {
  H1,
  H2,
  HL1,
  HL2,
  T1,
  T2,
  T3,
  ThemedText,
} from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import { Image } from "expo-image";
import "nativewind";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import WaveView from "react-native-waveview";

const WAVE_BACKGROUND_COLOR = "#ffffff";

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    width: 300,
    height: 200,
    overflow: "hidden",
    backgroundColor: WAVE_BACKGROUND_COLOR,
  },
});

/**
 * A (Amplitude) - 진폭, 웨이브의 높이/깊이
 * 값 범위: 보통 5~50 정도
 * 효과:
 * A가 클수록 → 웨이브가 더 높고 깊게 움직임
 * A가 작을수록 → 웨이브가 얕고 부드럽게 움직임
 *
 * T (Period) - 주기, 웨이브가 한 번 완전히 움직이는 시간
 * 값 범위: 보통 50~300 정도
 * 효과:
 * T가 클수록 → 웨이브가 천천히 움직임
 * T가 작을수록 → 웨이브가 빠르게 움직임
 */
const wavesDict = [
  [
    { A: 15, T: 400, fill: "#555879" },
    { A: 25, T: 350, fill: "#98A1BC" },
    { A: 35, T: 300, fill: "#DED3C4" },
  ],
  [
    { A: 10, T: 350, fill: "#C0C9EE" },
    { A: 20, T: 325, fill: "#A2AADB" },
    { A: 30, T: 300, fill: "#898AC4" },
  ],
  [
    { A: 10, T: 500, fill: "#819A91" },
    { A: 15, T: 400, fill: "#A7C1A8" },
    { A: 20, T: 300, fill: "#D1D8BE" },
  ],
  [
    { A: 20, T: 400, fill: "#DDF6D2" },
    { A: 30, T: 350, fill: "#CAE8BD" },
    { A: 40, T: 300, fill: "#B0DB9C" },
  ],
  [
    { A: 15, T: 350, fill: "#4ED7F1" },
    { A: 20, T: 325, fill: "#6FE6FC" },
    { A: 25, T: 300, fill: "#A8F1FF" },
  ],
];

const trackMarks = [100, 300, 500, 700, 1000];

export default function HomeScreen() {
  const waveRef = useRef<WaveView>(null);
  const [waterHeight, setWaterHeight] = useState(10);
  const [waveIdx, setWaveIdx] = useState(0);
  const [sliderVal, setSliderVal] = useState(250);

  useEffect(() => {
    waveRef.current?.setWaterHeight(waterHeight);
    waveRef.current?.setWaveParams(wavesDict[waveIdx]);
  }, [waveIdx]);

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

      {/* 시연 이후 삭제 예정*/}
      <ThemedView style={{ gap: 10 }}>
        <CustomButton title={"PRIMARY(DEFAULT)"} variant={"primary"} />
        <CustomButton title={"SECONDARY"} variant={"secondary"} />
        <CustomButton title={"TERTIARY"} variant={"tertiary"} />
        <CustomButton title={"WARNING"} variant={"warning"} />
      </ThemedView>

      <ThemedView>
        <Slider
          containerStyle={{
            backgroundColor: Colors.primary_050,
          }}
          minimumValue={100}
          maximumValue={1000}
          onValueChange={(value) => setSliderVal(value[0])}
          value={sliderVal}
          step={10}
          trackMarks={trackMarks}
          renderAboveThumbComponent={() => {
            return (
              <ThemedView>
                <ThemedText>{sliderVal}</ThemedText>
              </ThemedView>
            );
          }}
          renderTrackMarkComponent={(index) => {
            return (
              <ThemedView
                style={{
                  backgroundColor: "transparent",
                  height: 80,
                  justifyContent: "flex-end",
                }}
              >
                <ThemedText style={{ color: Colors.neutral_400 }}>
                  {trackMarks[index]}
                </ThemedText>
              </ThemedView>
            );
          }}
          thumbStyle={{
            width: 40,
            height: 40,
            borderRadius: 48,
            backgroundColor: Colors.neutral_600,
            borderWidth: 8,
            borderColor: Colors.neutral_000,
            shadowColor: Colors.neutral_1000,
            shadowRadius: 20,
          }}
          trackStyle={{
            height: 6,
            borderRadius: 16,
          }}
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
      <View style={_styles.container}>
        <TouchableHighlight
          onPress={() => {
            setWaterHeight((waterHeight + 25) % 200);
            setWaveIdx((waveIdx + 1) % wavesDict.length);
          }}
        >
          <WaveView
            ref={waveRef}
            style={_styles.wave}
            H={30}
            waveParams={wavesDict[waveIdx]}
            animated={true}
          />
        </TouchableHighlight>
      </View>
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
