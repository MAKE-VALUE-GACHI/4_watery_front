import { useState } from "react";
import SurveyHeader from "@/app/onboard-survey/components/SurveyHeader";
import SurveyProgressBar from "@/app/onboard-survey/components/SurveyProgressBar";
import { SurveyContentWrapper, SurveyPageContainer } from "@/app/onboard-survey/index.styles";

const categories = ["성별", "출생연도", "체중", "하루 평균 활동량"];

const OnboardSurvey = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <SurveyPageContainer>
      <SurveyProgressBar currentStep={currentStep} totalSteps={4} />
      <SurveyContentWrapper>
        <SurveyHeader
          currentStep={currentStep}
          totalSteps={4}
          categoryName={categories[currentStep - 1]}
        />
      </SurveyContentWrapper>
    </SurveyPageContainer>
  );
};

export default OnboardSurvey;
