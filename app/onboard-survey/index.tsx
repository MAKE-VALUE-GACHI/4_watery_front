import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";
import SurveyProgressBar from "@/app/onboard-survey/components/SurveyProgressBar";
import { SurveyContentWrapper, SurveyPageContainer } from "@/app/onboard-survey/index.styles";
import { useState } from "react";
import ActivityStep from "./steps/ActivityStep";
import BirthYearStep from "./steps/BirthYearStep";
import GenderStep from "./steps/GenderStep";
import WeightStep from "./steps/WeightStep";

const categories = ["성별", "출생연도", "체중", "하루 평균 활동량"];

const stepComponents = [GenderStep, BirthYearStep, WeightStep, ActivityStep];

const OnboardSurvey = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const CurrentStepComponent = stepComponents[currentStep - 1];

  return (
    <SurveyPageContainer>
      <SurveyProgressBar currentStep={currentStep} totalSteps={stepComponents.length} />
      <SurveyContentWrapper>
        <SurveyHeader
          currentStep={currentStep}
          totalSteps={stepComponents.length}
          categoryName={categories[currentStep - 1]}
        />
        <CurrentStepComponent />
      </SurveyContentWrapper>
    </SurveyPageContainer>
  );
};

export default OnboardSurvey;
