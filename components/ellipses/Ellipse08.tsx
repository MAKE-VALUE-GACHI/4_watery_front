import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse08() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Ellipses/Ellipse8.png")}
        style={styles.ellipse}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(300),
    right: horizontalScale(200),
    width: horizontalScale(240),
    height: verticalScale(240),
    padding: 1,
    borderRadius: horizontalScale(70), // width/2 → perfect circle
    backgroundColor: "transparent",
    overflow: "hidden",
    zIndex: 0,
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
});
