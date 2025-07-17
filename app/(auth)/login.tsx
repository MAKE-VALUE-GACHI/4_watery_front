import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { useAuthManager } from "@/hooks/useAuth/authManager";
import * as Notifications from "expo-notifications";
import { loginToBackend } from "@/libs/api/auth";
import { saveAccessToken } from "@/libs/secure/token";
import { initializeKakao } from "@react-native-kakao/core";

import type { SocialProvider } from "@/types/auth";

export default function LoginScreen() {
  const router = useRouter();
  const onMoveHome = () => {
    router.push("/(tabs)"); // Splash → 메인으로 이동
  };

  useEffect(() => {
    initializeKakao(process.env.EXPO_PUBLIC_NATIVE_APP_KEY);
  }, []);

  const { loginWithProvider, googlePromptAsync, googleRequest } = useAuthManager();

  const handleLogin = async (type: SocialProvider) => {
    const { data: expoPushToken } = await Notifications.getDevicePushTokenAsync();

    try {
      if (type === "GOOGLE") {
        console.log("🟡 promptAsync 실행 전");

        const result = await googlePromptAsync(); // <== 여기가 핵심
        if (result?.type !== "success" || !result.authentication?.accessToken) {
          throw new Error("Google 로그인 실패 또는 취소됨");
        }

        const backendRes = await loginToBackend(
          "GOOGLE",
          expoPushToken,
          result.authentication.accessToken,
        );

        await saveAccessToken(backendRes.token);
        console.log("✅ 로그인 성공:", backendRes);
        router.replace("/(tabs)");
        return;
      }

      // KAKAO 로그인 처리
      const user = await loginWithProvider(type, expoPushToken);
      console.log("✅ 로그인 성공:", user);
      router.replace("/(tabs)");
    } catch (e) {
      console.error("❌ 로그인 실패:", e);
    }
  };

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "pink" }}
    >
      <Text>로그인 페이지</Text>
      <Button
        title="Google 로그인"
        disabled={!googleRequest}
        onPress={() => {
          console.log("👉 Google 로그인 버튼 눌림");
          handleLogin("GOOGLE");
        }}
      />

      <Text>{googleRequest ? "Google ready" : "Google not ready"}</Text>

      <Button title="Kakao 로그인" onPress={() => handleLogin("KAKAO")} />
      <Button title="Home 이동" onPress={onMoveHome} />
    </View>
  );
}
