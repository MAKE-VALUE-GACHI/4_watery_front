import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { loginToBackend } from "@/libs/api/auth";
import { saveAccessToken } from "@/libs/secure/token";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleLogin = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({
      useProxy: true, // Expo Go 사용 시 필수
    }),
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

  const login = async (pushToken: string, accessToken: string): Promise<{ token: string }> => {
    const backendRes = await loginToBackend("GOOGLE", pushToken, accessToken);
    return backendRes;
  };

  return { request, promptAsync, login };
};
