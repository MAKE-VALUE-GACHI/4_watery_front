import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse09() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Ellipses/Ellipse9.png")}
        style={styles.ellipse}
        resizeMode="contain" // Figma의 ContentScale.None에 해당
        blurRadius={12} // 대략 48dp에 해당하는 blur (조정 가능)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(658), // 필요시 위치 조정
    left: horizontalScale(280), // 왼쪽으로 살짝 조정
    width: horizontalScale(130),
    height: verticalScale(130),
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
