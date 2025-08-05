import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import GoogleIcon from "@/assets/icons/IconGoogle.svg";
import KakaoIcon from "@/assets/icons/IconKakao.svg"; // 예: SVG를 컴포넌트로 사용하는 경우
import { SocialLoginButtonsProps } from "@/types/button";

export default function SocialLoginButtons({ handleLogin }: SocialLoginButtonsProps) {
  return (
    <View style={styles.container}>
      {/* 구글 로그인 */}
      <TouchableOpacity style={styles.googleButton} onPress={() => handleLogin("GOOGLE")}>
        <GoogleIcon width={horizontalScale(18)} height={verticalScale(18)} style={styles.icon} />
        <Text style={styles.googleText}>구글 계정으로 시작하기</Text>
      </TouchableOpacity>

      {/* 카카오 로그인 */}
      <TouchableOpacity style={styles.kakaoButton} onPress={() => handleLogin("KAKAO")}>
        <KakaoIcon width={horizontalScale(18)} height={verticalScale(18)} style={styles.icon} />
        <Text style={styles.kakaoText}>카카오톡으로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(16),
    backgroundColor: "transparent",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: horizontalScale(311),
    height: verticalScale(54),
    borderRadius: horizontalScale(16),
    borderWidth: 1,
    borderColor: "#E6E8EA",
    backgroundColor: "#FFFFFF",
  },
  kakaoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: horizontalScale(311),
    height: verticalScale(54),
    borderRadius: horizontalScale(16),
    backgroundColor: "#FEE500",
  },
  icon: {
    marginRight: horizontalScale(8),
  },
  googleText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "Pretendard-Medium",
    fontWeight: "500",
    color: "#1E2124",
    letterSpacing: 0.14,
  },
  kakaoText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "Pretendard-Medium",
    fontWeight: "500",
    color: "#1E2124",
    letterSpacing: 0.14,
  },
});
