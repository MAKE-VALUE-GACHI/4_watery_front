import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";
import SurveyProgressBar from "@/app/onboard-survey/components/SurveyProgressBar";
import { SurveyContentWrapper, SurveyPageContainer } from "@/app/onboard-survey/index.styles";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useOnboardStepStore } from "@/stores/onboardStepStore";
import { FormProvider, useForm } from "react-hook-form";
import ActivityStep from "./steps/ActivityStep";
import BirthYearStep from "./steps/BirthYearStep";
import GenderStep from "./steps/GenderStep";
import WeightStep from "./steps/WeightStep";
import { useRouter } from "expo-router";

const categories = ["성별", "출생연도", "체중", "하루 평균 활동량"];

const stepComponents = [GenderStep, BirthYearStep, WeightStep, ActivityStep];

const OnboardSurvey = () => {
  const router = useRouter();
  const { currentStep, nextStep, setCurrentStep } = useOnboardStepStore();
  const CurrentStepComponent = stepComponents[currentStep - 1];

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

  return (
    <FormProvider {...methods}>
      <SurveyPageContainer>
        <SurveyProgressBar currentStep={currentStep} totalSteps={stepComponents.length} />
        <SurveyContentWrapper>
          <SurveyHeader
            currentStep={currentStep}
            totalSteps={stepComponents.length}
            categoryName={categories[currentStep - 1]}
          />
          <CurrentStepComponent />
          <CustomButton
            title={currentStep === stepComponents.length ? "시작하기" : "다음 단계"}
            onPress={handleButtonPress}
          />
        </SurveyContentWrapper>
      </SurveyPageContainer>
    </FormProvider>
  );
};

export default OnboardSurvey;
