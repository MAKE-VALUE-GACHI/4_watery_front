import React from "react";
import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function BubbleImage03() {
  return <Image source={require("@/assets/images/bubbles/bubble03.png")} style={styles.bubble} />;
}

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    width: horizontalScale(65),
    height: verticalScale(40),
    top: verticalScale(581),
    left: horizontalScale(178),
    zIndex: 0,
    resizeMode: "contain",
  },
});
