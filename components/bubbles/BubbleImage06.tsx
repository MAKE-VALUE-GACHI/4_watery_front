// components/bubbles/BubbleImage06.tsx
import React from "react";
import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function BubbleImage06() {
  return <Image source={require("@/assets/images/bubbles/bubble06.png")} style={styles.bubble} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bubble: {
    position: "absolute",
    width: horizontalScale(350),
    height: verticalScale(280),
    top: verticalScale(-25),
    left: horizontalScale(25),
    zIndex: 0,
    resizeMode: "contain",
  },
});
