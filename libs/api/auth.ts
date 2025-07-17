import type { SocialProvider } from "@/types/auth";

const BASE_URL = "http://52.78.70.177:8080/api/v1";

export const loginToBackend = async (
  social: SocialProvider,
  pushToken: string,
  socialAccessToken: string,
) => {
  const res = await fetch(`${BASE_URL}/auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ social, pushToken, socialAccessToken }),
  });

  if (!res.ok) throw new Error("백엔드 로그인 실패");
  return res.json();
};
