import { Stack } from "expo-router";
import React from "react";
import CommonHeader from "@/components/CommonHeader/CommonHeader";

export default function RecordHistoryLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <CommonHeader />,
        headerTitle: "",
      }}
    />
  );
}
