import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";
import SurveyProgressBar from "@/app/onboard-survey/components/SurveyProgressBar";
import CustomButton from "@/components/CustomButton/CustomButton";
import { ThemedView } from "@/components/ThemedView";
import { useOnboardStepStore } from "@/stores/onboardStepStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import GenderStep from "@/app/onboard-survey/steps/GenderStep";
import BirthYearStep from "@/app/onboard-survey/steps/BirthYearStep";
import WeightStep from "@/app/onboard-survey/steps/WeightStep";
import ActivityStep from "@/app/onboard-survey/steps/ActivityStep";
import indexStyles from "@/app/onboard-survey/index.styles";
import { View } from "react-native";

const categories = ["성별", "출생연도", "체중", "하루 평균 활동량"];

interface StepProps {
  onSelectionChange?: (selected: boolean) => void;
}

const stepComponents: React.ComponentType<StepProps>[] = [
  GenderStep,
  BirthYearStep,
  WeightStep,
  ActivityStep,
];

const OnboardSurvey = () => {
  const router = useRouter();
  const { currentStep, nextStep, setCurrentStep } = useOnboardStepStore();
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [isActivitySelected, setIsActivitySelected] = useState(false);

  const methods = useForm({
    defaultValues: {
      gender: "",
      birthYear: "",
      weight: "",
      activity: "",
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
      <FormProvider {...methods}>
        <ThemedView style={indexStyles.SurveyPageContainer}>
          <SurveyProgressBar currentStep={currentStep} totalSteps={stepComponents.length} />
          <ThemedView style={indexStyles.SurveyContentWrapper}>
            <SurveyHeader
              currentStep={currentStep}
              totalSteps={stepComponents.length}
              categoryName={categories[currentStep - 1]}
            />
            {renderStep()}
            <CustomButton
              disabled={isButtonDisabled}
              title={currentStep === stepComponents.length ? "시작하기" : "다음 단계"}
              onPress={handleButtonPress}
            />
          </ThemedView>
        </ThemedView>
      </FormProvider>
    </View>
  );
};

export default OnboardSurvey;
