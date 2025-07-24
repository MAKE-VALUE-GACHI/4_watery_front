import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import { initializeKakaoSDK } from "@react-native-kakao/core";

import { loginToBackend } from "@/libs/api/auth";
import { saveAccessToken } from "@/libs/secure/token";
import { useAuthManager } from "@/hooks/useAuth/authManager";
import PageWrapper from "@/components/layout/PageWrapper";

import { horizontalScale, verticalScale, scaleFont } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";
import type { SocialProvider } from "@/types/auth";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BottomSheet from "@/components/common/BottomSheet";
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
  const insets = useSafeAreaInsets();
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary_010, // #F6F9FE
    },

    // 로고 위치 및 크기: pt-168, pl-48, width: 125dp, height: 59dp
    logoWrapper: {
      position: "absolute",
      top: verticalScale(168),
      left: horizontalScale(48),
      width: horizontalScale(125),
      height: verticalScale(59),
    },

    // 서브타이틀: pt-229, pl-52, width: 92, height: 22
    subText: {
      position: "absolute",
      top: verticalScale(229),
      left: horizontalScale(52),
      width: horizontalScale(92),
      height: verticalScale(22),
      fontWeight: "600",
      fontSize: scaleFont(14),
      lineHeight: verticalScale(22),
      color: Colors.neutral_400, // #8A949E
    },

    // 로그인 버튼 (개발 중 테스트용, 추후 제거 예정)
    buttonGroup: {
      position: "absolute",
      bottom: verticalScale(300),
      alignSelf: "center",
      gap: verticalScale(12),
    },
  });

  return (
    <>
      <PageWrapper backgroundColor={Colors.primary_010}>
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
        <View style={styles.logoWrapper}>
          <LogoSvg width={horizontalScale(125)} height={verticalScale(59)} />
        </View>
        <LR1 style={styles.subText}>오늘의 수분 기록</LR1>

        {/* 소셜 로그인 버튼 */}
        <BottomSheet>
          <View style={{ gap: verticalScale(16), alignItems: "center" }}>
            <SocialLoginButtons handleLogin={handleLogin} />
          </View>
        </BottomSheet>

        {/* 로그인 버튼 영역 -> 추후 제거 요망 */}
        <View style={styles.buttonGroup}>
          <Button title="메인 이동" onPress={() => router.replace("/(tabs)")} />
        </View>
      </PageWrapper>
    </>
  );
}
