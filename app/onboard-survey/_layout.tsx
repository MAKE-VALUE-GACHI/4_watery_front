// app/onboard-survey/_layout.tsx
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useOnboardStepStore } from "@/stores/onboardStepStore";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function OnboardSurveyLayout() {
  const { currentStep, prevStep } = useOnboardStepStore();
  const router = useRouter();

  const handleBack = () => {
    if (currentStep > 1) {
      prevStep();
    } else {
      router.back();
    }
  };

  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={handleBack}>
            <ThemedView>
              <MaterialIcons name={"arrow-back"} size={24} color={Colors.neutral_400} />
            </ThemedView>
          </TouchableOpacity>
        ),
      }}
    />
  );
}
