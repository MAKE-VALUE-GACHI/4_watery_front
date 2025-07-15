import { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";
import SurveyProgressBar from "@/app/onboard-survey/components/SurveyProgressBar";

const categories = ["성별", "출생연도", "체중", "하루 평균 활동량"];

const OnboardSurvey = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <ThemedView>
      <SurveyProgressBar currentStep={currentStep} totalSteps={4} />
      <SurveyHeader
        currentStep={currentStep}
        totalSteps={4}
        categoryName={categories[currentStep]}
      />
    </ThemedView>
  );
};

export default OnboardSurvey;
