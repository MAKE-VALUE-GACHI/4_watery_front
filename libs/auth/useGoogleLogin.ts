import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { loginToBackend } from "../api/auth";
import { saveAccessToken } from "../secure/token";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession();

const isExpoGo = Constants.appOwnership === "expo";

// const redirectUri = AuthSession.makeRedirectUri({
//   useProxy: Constants.appOwnership === "expo", // 자동 분기
// });
const redirectUri = AuthSession.makeRedirectUri({
  native: "watery://redirect",
});
// const redirectUri = AuthSession.makeRedirectUri({
//   native: "watery://redirect", // 앱에서 받을 수 있는 URI
// });
// const redirectUri = AuthSession.makeRedirectUri({ useProxy: false });
export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    redirectUri, // 위에서 설정한 분기된 redirectUri 사용
  });

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (response?.type === "success") {
      const token = response.authentication?.accessToken;
      if (token) {
        setAccessToken(token);
      }
    }
  }, [response]);

  const login = async (pushToken: string): Promise<{ token: string }> => {
    const result = await promptAsync();
    if (result.type !== "success" || !result.authentication?.accessToken) {
      throw new Error("Google 로그인 실패 또는 취소됨");
    }

    const token = result.authentication.accessToken;
    const backendRes = await loginToBackend("GOOGLE", pushToken, token);
    return backendRes;
  };

  return { request, promptAsync, login };
};
