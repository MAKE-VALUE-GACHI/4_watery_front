import { useOnboardStepStore } from "@/stores/onboardStepStore";
import { Stack, useRouter } from "expo-router";
import React from "react";
import CommonHeader from "@/components/CommonHeader/CommonHeader";

export default function AddBeverageLayout() {
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
        header: () => (
          <CommonHeader
            onPressIcon={handleBack}
            isEmpty={currentStep === 0}
            title={"음료 추가하기"}
            isComplete={true}
          />
        ),
      }}
    />
  );
}
