import React from "react";
import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function BubbleImage01() {
  return <Image source={require("@/assets/images/bubbles/bubble01.png")} style={styles.bubble} />;
}

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    width: horizontalScale(71),
    height: verticalScale(44),
    top: verticalScale(748),
    left: horizontalScale(23),
    zIndex: 0,
    resizeMode: "contain",
  },
});
