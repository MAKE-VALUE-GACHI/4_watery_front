import { login as kakaoLogin } from "@react-native-kakao/user";
import { loginToBackend } from "@/libs/api/auth";

export const useKakaoLogin = () => {
  const login = async (pushToken: string): Promise<{ token: string }> => {
    const result = await kakaoLogin();
    const kakaoAccessToken = result?.accessToken;

    if (!kakaoAccessToken) throw new Error("Kakao access token 없음");

    const backendRes = await loginToBackend("KAKAO", pushToken, kakaoAccessToken);
    return backendRes;
  };

  return { login };
};
