import CommonHeader from "@/components/CommonHeader/CommonHeader";
import { Stack, usePathname } from "expo-router";
import React from "react";

export default function SettingsLayout() {
  const pathname = usePathname();

  const getHeaderTitle = () => {
    switch (pathname) {
      case "/login-info":
        return "로그인 정보";
      default:
        return "개인 설정";
    }
  };

  return (
    <Stack
      screenOptions={{
        header: () => <CommonHeader title={getHeaderTitle()} />,
      }}
    />
  );
}
