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
              {/*  TODO: 최초 단계 시 스플래시 화면으로 이동 로직 추가 및 아이콘 되돌리기 */}
              {currentStep > 1 && (
                <MaterialIcons name={"arrow-back"} size={24} color={Colors.neutral_400} />
              )}
            </ThemedView>
          </TouchableOpacity>
        ),
      }}
    />
  );
}
