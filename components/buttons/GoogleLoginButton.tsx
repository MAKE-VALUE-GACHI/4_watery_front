import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconGoogle from "@/assets/icons/IconGoogle.svg";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function GoogleLoginButton() {
  return (
    <View style={styles.container}>
      <IconGoogle width={horizontalScale(18)} height={verticalScale(18)} style={styles.icon} />
      <Text style={styles.text}>구글 계정으로 시작하기</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: horizontalScale(311),
    height: verticalScale(54),
    borderRadius: horizontalScale(16),
    borderWidth: 1,
    borderColor: "#E6E8EA",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: horizontalScale(40),
  },
  icon: {
    width: horizontalScale(18),
    height: verticalScale(18),
    marginRight: horizontalScale(8),
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1E2124",
    textAlign: "center",
    flex: 1,
  },
});
