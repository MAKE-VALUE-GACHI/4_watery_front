import { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";

const categories = ["성별", "출생연도", "체중", "하루 평균 활동량"];

const OnboardSurvey = () => {
  const [surveyStep, setSurveyStep] = useState(0);

  return (
    <ThemedView>
      <SurveyHeader currentStep={surveyStep} totalSteps={4} categoryName={categories[surveyStep]} />
    </ThemedView>
  );
};

export default OnboardSurvey;
