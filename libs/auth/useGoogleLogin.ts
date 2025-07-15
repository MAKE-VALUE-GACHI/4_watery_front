import React, { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { loginToBackend } from "../api/auth";
import { saveAccessToken } from "../secure/token";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({
      useProxy: true,
    }),
  });

  const login = async (pushToken: string): Promise<{ token: string }> => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      const token = response.authentication.accessToken;
      const backendRes = await loginToBackend("GOOGLE", pushToken, token);
      return backendRes;
    }
    throw new Error("Google 로그인 실패 또는 accessToken 없음");
  };

  return { request, promptAsync, login };
};
