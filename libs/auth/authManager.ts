import { useKakaoLogin } from "./useKakaoLogin";
import { useGoogleLogin } from "./useGoogleLogin";
import { saveAccessToken } from "../secure/token";

export const useAuthManager = () => {
  const { login: kakaoLogin } = useKakaoLogin();
  const { request, promptAsync, login: googleLogin } = useGoogleLogin();

  const loginWithProvider = async (provider: "GOOGLE" | "KAKAO", pushToken: string) => {
    if (provider === "GOOGLE") {
      const backendRes = await googleLogin(pushToken);
      await saveAccessToken(backendRes.token);
      return backendRes;
    }

    if (provider === "KAKAO") {
      const backendRes = await kakaoLogin(pushToken);
      await saveAccessToken(backendRes.token);
      return backendRes;
    }
  };

  return {
    googleRequest: request,
    googlePromptAsync: promptAsync,
    loginWithProvider,
  };
};
