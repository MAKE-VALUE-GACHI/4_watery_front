import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
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

export default function HomeScreen() {
  const waveRef = useRef<WaveView>(null);
  const [waterHeight, setWaterHeight] = useState(50);
  const [waveIdx, setWaveIdx] = useState(0);

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
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
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
