import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { loginToBackend } from "../api/auth";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
  });

  const login = async (pushToken: string) => {
    if (response?.type === "success") {
      const token = response.authentication?.accessToken;
      if (!token) throw new Error("Google access token 없음");

      const backendRes = await loginToBackend("GOOGLE", pushToken);
      return backendRes;
    }
  };

  return { request, promptAsync, login };
};
