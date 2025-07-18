import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse07() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/ellipses/Ellipse7.png")}
        style={styles.ellipse}
        resizeMode="center" // ContentScale.None에 해당
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(373),
    left: horizontalScale(257),
    width: horizontalScale(120),
    height: verticalScale(120),
    backgroundColor: "#D4EFF7",
    padding: 1,
    borderRadius: horizontalScale(60), // width/2 for perfect circle
    overflow: "hidden",
    zIndex: 0,
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
});
