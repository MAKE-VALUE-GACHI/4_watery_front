import { useAuthManager } from "@/libs/auth/authManager";
import * as Notifications from "expo-notifications";
import { Button, View, Text } from "react-native";

export default function LoginScreen() {
  const { loginWithProvider, googlePromptAsync, googleRequest } = useAuthManager();

  const handleLogin = async (type: "GOOGLE" | "KAKAO") => {
    const { data: expoPushToken } = await Notifications.getDevicePushTokenAsync();

    try {
      const user = await loginWithProvider(type, expoPushToken);
      console.log("✅ 로그인 성공:", user);
    } catch (e) {
      console.error("❌ 로그인 실패:", e);
    }
  };

  return (
    <View>
      <Text>로그인 페이지</Text>
      <Button title="Google 로그인" disabled={!googleRequest} onPress={() => googlePromptAsync()} />
      <Button title="Kakao 로그인" onPress={() => handleLogin("KAKAO")} />
    </View>
  );
}
