import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse10() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Ellipses/Ellipse10.png")}
        style={styles.ellipse}
        resizeMode="contain" // ✅ 블러 외곽 보존
      />
    </View>
  );
}

const SCALE_FACTOR = 1.6; // 또는 1.5~1.6로 실측하면서 조정

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(621), // 필요시 이 값도 살짝 조정
    right: horizontalScale(185),
    width: horizontalScale(120 * SCALE_FACTOR),
    height: verticalScale(120 * SCALE_FACTOR),
    padding: 1,
    backgroundColor: "transparent",
    overflow: "hidden",
    zIndex: 0,
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
});
