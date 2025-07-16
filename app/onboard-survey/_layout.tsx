// app/onboard-survey/_layout.tsx
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function OnboardSurveyLayout() {
  const methods = useForm({
    defaultValues: {
      gender: "",
      birthYear: "",
      weight: "",
      activity: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerLeft: () => (
            <ThemedView>
              <MaterialIcons name={"arrow-back"} size={24} color={Colors.neutral_400} />
            </ThemedView>
          ),
        }}
      ></Stack>
    </FormProvider>
  );
}
