import React from "react";
import IconKakao from "@/assets/icons/IconKakao.svg";
import { View, Text, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

export default function KakaoLoginButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>카카오톡으로 시작하기</Text>
      <IconKakao width={horizontalScale(18)} height={verticalScale(18)} style={styles.icon} />
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
    backgroundColor: "#FEE500",
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
