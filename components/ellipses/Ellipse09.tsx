import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse09() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/ellipses/Ellipse9.png")}
        style={styles.ellipse}
        resizeMode="center" // Figma의 ContentScale.None에 해당
        blurRadius={12} // 대략 48dp에 해당하는 blur (조정 가능)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(635),
    left: horizontalScale(308),
    width: horizontalScale(70),
    height: verticalScale(70),
    backgroundColor: "#B2E0EE",
    padding: 1,
    borderRadius: horizontalScale(35),
    overflow: "hidden",
    zIndex: 0,
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
});
