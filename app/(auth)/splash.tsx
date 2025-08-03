import splashStyles from "@/app/(auth)/splash.styles";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import { initializeKakaoSDK } from "@react-native-kakao/core";

import { loginToBackend } from "@/libs/api/auth";
import { saveAccessToken } from "@/libs/secure/token";
import { useAuthManager } from "@/hooks/useAuth/authManager";

import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import type { SocialProvider } from "@/types/auth";

import CustomBottomSheetRound from "@/components/CustomBottomSheetRound/CustomBottomSheetRound";
import SocialLoginButtons from "@/components/login/SocialLoginButtons";
import LogoSvg from "@/components/svgs/LogoSvg";
import { LR1 } from "@/components/ThemedText";

import BubbleImage03 from "@/components/bubbles/BubbleImage03";
import BubbleImage04 from "@/components/bubbles/BubbleImage04";
import BubbleImage05 from "@/components/bubbles/BubbleImage05";
import BubbleImage06 from "@/components/bubbles/BubbleImage06";
import Ellipse07 from "@/components/ellipses/Ellipse07";
import Ellipse08 from "@/components/ellipses/Ellipse08";
import Ellipse09 from "@/components/ellipses/Ellipse09";
import Ellipse10 from "@/components/ellipses/Ellipse10";

export default function SplashScreen() {
  const router = useRouter();
  const { loginWithProvider, googlePromptAsync, googleRequest } = useAuthManager();

  useEffect(() => {
    const key = process.env.EXPO_PUBLIC_NATIVE_APP_KEY;
    if (key) initializeKakaoSDK(key);
    else console.warn("Kakao App Key is undefined");
  }, []);

  const handleLogin = async (type: SocialProvider) => {
    const { data: expoPushToken } = await Notifications.getDevicePushTokenAsync();

    try {
      if (type === "GOOGLE") {
        const result = await googlePromptAsync();
        if (result?.type !== "success" || !result.authentication?.accessToken) {
          throw new Error("Google 로그인 실패 또는 취소됨");
        }

        const backendRes = await loginToBackend(
          "GOOGLE",
          expoPushToken,
          result.authentication.accessToken,
        );
        await saveAccessToken(backendRes.token);
        router.replace("/(tabs)");
        return;
      }

      // KAKAO 로그인
      const user = await loginWithProvider(type, expoPushToken);
      console.log("✅ 로그인 성공:", user);
      router.replace("/(tabs)");
    } catch (e) {
      console.error("❌ 로그인 실패:", e);
    }
  };

  return (
    <View style={splashStyles.container}>
      {/* 배경 원형 */}
      <Ellipse07 />
      <Ellipse08 />
      <Ellipse09 />
      <Ellipse10 />

      {/* 배경 물방울 */}
      <BubbleImage06 />
      <BubbleImage04 />
      <BubbleImage05 />
      <BubbleImage03 />

      {/* SVG 로고 & TEXT */}
      <LogoSvg style={splashStyles.logo} />
      <LR1 style={splashStyles.subText}>오늘의 수분 기록</LR1>

      {/* 소셜 로그인 버튼 */}
      <CustomBottomSheetRound positionStyle={{ bottom: verticalScale(48) }}>
        <View style={{ gap: verticalScale(16), alignItems: "center" }}>
          <SocialLoginButtons handleLogin={handleLogin} />
        </View>
      </CustomBottomSheetRound>

      {/* 로그인 버튼 영역 -> 추후 제거 요망 */}
      <View style={splashStyles.buttonGroup}>
        <Button title="메인 이동" onPress={() => router.replace("/(tabs)")} />
      </View>
    </View>
  );
}
