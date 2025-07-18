import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function Ellipse08() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Ellipses/Ellipse8.png")}
        style={styles.ellipse}
        resizeMode="center" // ContentScale.None 대응
        blurRadius={16} // 80dp 대응 (1dp ≈ 0.2 blurRadius)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(331),
    left: horizontalScale(-33),
    width: horizontalScale(140),
    height: verticalScale(140),
    backgroundColor: "#D4EFF7",
    padding: 1,
    borderRadius: horizontalScale(70),
    overflow: "hidden",
    zIndex: 0,
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
});
