import React from "react";
import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function BubbleImage05() {
  return <Image source={require("@/assets/images/bubbles/bubble05.png")} style={styles.bubble} />;
}

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    width: horizontalScale(191),
    height: verticalScale(120),
    top: verticalScale(400),
    left: horizontalScale(199),
    zIndex: 0,
    resizeMode: "contain", // 또는 "cover", "stretch" 필요에 따라
  },
});
