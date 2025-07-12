import { login as kakaoLogin } from "@react-native-kakao/user";
import { loginToBackend } from "../api/auth";

export const useKakaoLogin = () => {
  const login = async (pushToken: string) => {
    const result = await kakaoLogin();
    const kakaoAccessToken = result?.accessToken;

    if (!kakaoAccessToken) throw new Error("Kakao access token 없음");

    const backendRes = await loginToBackend("KAKAO", pushToken);
    return backendRes;
  };

  return { login };
};
