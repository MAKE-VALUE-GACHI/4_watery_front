import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

const kakaoNativeAppKey = process.env.EXPO_PUBLIC_NATIVE_APP_KEY;

if (!kakaoNativeAppKey) {
  throw new Error("Kakao native app key is missing. Please set EXPO_PUBLIC_NATIVE_APP_KEY.");
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Watery",
  slug: "watery",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "watery", // 리디렉션에 사용
  userInterfaceStyle: "automatic",
  icon: "./assets/images/icon.png",
  splash: {
    image: "./assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  android: {
    package: "com.anonymous.Watery",
    intentFilters: [
      {
        action: "VIEW",
        data: {
          scheme: "exp+watery",
        },
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.anonymous.Watery",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-web-browser",
    "expo-secure-store",
    [
      "@react-native-kakao/core",
      {
        nativeAppKey: kakaoNativeAppKey,
        android: { authCodeHandlerActivity: true },
        ios: { handleKakaoOpenUrl: true },
      },
    ],
    [
      "expo-build-properties",
      {
        android: {
          extraMavenRepos: ["https://devrepo.kakao.com/nexus/content/groups/public/"],
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "c10a5711-66eb-4578-a69f-ce6026703c16",
    },
  },
});
