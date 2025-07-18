import React, { useContext } from "react";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
}

// export function useBottomTabOverflow() {
//   return useBottomTabBarHeight();
// }

// ✅ 수정된 안전한 훅
export function useBottomTabOverflow(): number {
  const height = useContext(BottomTabBarHeightContext);
  return height ?? 0;
}
