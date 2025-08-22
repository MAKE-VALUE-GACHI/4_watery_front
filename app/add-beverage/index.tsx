import { View } from "react-native";
import React, { useState, useMemo } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

import DefaultStep from "@/app/add-beverage/steps/DefaultStep";
import NameStep from "@/app/add-beverage/steps/NameStep";
import ColorStep from "@/app/add-beverage/steps/ColorsStep";
import GoalStep from "@/app/add-beverage/steps/GoalStep";
import { useOnboardStepStore } from "@/stores/onboardStepStore";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { ThemedView } from "@/components/ThemedView";
import indexStyles from "@/app/add-beverage/index.styles";
import SurveyProgressBar from "@/app/onboard-survey/components/SurveyProgressBar";
import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";
import CustomButton from "@/components/CustomButton/CustomButton";
import BeverageCan from "@/app/add-beverage/components/BeverageCan";

const categories = ["음료 추가하기", "음료 이름 생성", "음료 색상 설정", "음료 섭취량 포함 여부"];

interface StepProps {
  onSelectionChange?: (selected: boolean) => void;
  onChooseCustom?: () => void; // ✅ 직접 만들기 진입용
}

interface StepProps {
  onSelectionChange?: (selected: boolean) => void;
}

const stepComponents: React.ComponentType<StepProps>[] = [
  DefaultStep,
  NameStep,
  ColorStep,
  GoalStep,
];
export default function AddBeveragePage() {
  const router = useRouter();
  const { currentStep, nextStep, setCurrentStep } = useOnboardStepStore();
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [isActivitySelected, setIsActivitySelected] = useState(false);

  const methods = useForm({
    defaultValues: {
      default: "",
      name: "",
      color: "",
      goal: "",
    },
  });

  const onSubmit = (data: any) => {
    router.replace("/(tabs)");
    console.log("최종 제출 데이터:", data);
  };

  const handleButtonPress = () => {
    if (currentStep === stepComponents.length) {
      setCurrentStep(1);
      methods.handleSubmit(onSubmit)();
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    const stepProps: StepProps = {};
    if (currentStep === 1) stepProps.onSelectionChange = setIsGenderSelected;
    if (currentStep === 4) stepProps.onSelectionChange = setIsActivitySelected;
    const StepComponent = stepComponents[currentStep - 1];
    return <StepComponent {...stepProps} />;
  };

  const isButtonDisabled =
    (currentStep === 1 && !isGenderSelected) || (currentStep === 4 && !isActivitySelected);

  return (
    <View style={{ flex: 1 }}>
      {" "}
      <FormProvider {...methods}>
        {" "}
        <ThemedView style={indexStyles.SurveyPageContainer}>
          <BeverageCan />{" "}
          <SurveyHeader
            currentStep={currentStep}
            totalSteps={stepComponents.length}
            categoryName={categories[currentStep - 1]}
          />{" "}
          {renderStep()}{" "}
          <CustomButton
            disabled={isButtonDisabled}
            title={currentStep === stepComponents.length ? "시작하기" : "다음 단계"}
            onPress={handleButtonPress}
          />{" "}
        </ThemedView>{" "}
      </FormProvider>{" "}
    </View>
  );
}
