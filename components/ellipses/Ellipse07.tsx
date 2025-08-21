import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse07() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Ellipses/Ellipse7.png")}
        style={styles.ellipse}
        resizeMode="contain" // ContentScale.None에 해당
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(303),
    left: horizontalScale(200),
    width: horizontalScale(220),
    height: verticalScale(220),
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
