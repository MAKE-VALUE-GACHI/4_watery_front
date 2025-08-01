import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse10() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Ellipses/Ellipse10.png")}
        style={styles.ellipse}
        resizeMode="center" // Figma의 ContentScale.None
        blurRadius={12} // 약 48.dp 상당
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(708),
    right: horizontalScale(255), // pr 적용
    width: horizontalScale(120),
    height: verticalScale(120),
    backgroundColor: "#89CDED",
    padding: 1,
    borderRadius: horizontalScale(60),
    overflow: "hidden",
    zIndex: 0,
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
});
