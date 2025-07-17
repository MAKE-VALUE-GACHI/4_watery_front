import React from "react";
import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function BubbleImage04() {
  return <Image source={require("@/assets/images/bubbles/bubble04.png")} style={styles.bubble} />;
}

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    width: horizontalScale(323),
    height: verticalScale(208),
    top: verticalScale(257),
    left: horizontalScale(-51),
    zIndex: 0,
    resizeMode: "contain", // "cover"나 "stretch"도 테스트 가능
  },
});
