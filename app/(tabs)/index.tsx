import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import "nativewind";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import WaveView from "react-native-waveview";

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    width: 200,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "white",
  },
});

export default function HomeScreen() {
  const waveRef = useRef<WaveView>(null);
  const [testWave, setTestWave] = useState(false);

  useEffect(() => {
    if (testWave) {
      waveRef.current?.setWaterHeight(70);
      waveRef.current?.setWaveParams([
        { A: 10, T: 180, fill: "#FF9F2E" },
        { A: 15, T: 140, fill: "#F08200" },
        { A: 20, T: 100, fill: "#B36100" },
      ]);
    } else {
      // 원래 높이로 되돌리고 애니메이션 재시작
      waveRef.current?.setWaterHeight(30);
      waveRef.current?.setWaveParams([
        { A: 10, T: 180, fill: "#62c2ff" },
        { A: 15, T: 140, fill: "#0087dc" },
        { A: 20, T: 100, fill: "#1aa7ff" },
      ]);
    }
  }, [testWave]);

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
            setTestWave(!testWave);
          }}
        >
          <WaveView
            ref={waveRef}
            style={_styles.wave}
            H={30}
            waveParams={[
              { A: 10, T: 180, fill: "#62c2ff" },
              { A: 15, T: 140, fill: "#0087dc" },
              { A: 20, T: 100, fill: "#1aa7ff" },
            ]}
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
