// app/onboard-survey/_layout.tsx
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";

export default function OnboardSurveyLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerLeft: () => (
          <ThemedView>
            <MaterialIcons name={"arrow-back"} size={24} color={Colors.neutral_400} />
          </ThemedView>
        ),
      }}
    />
  );
}
