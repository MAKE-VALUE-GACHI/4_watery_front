import {
  ProgressBar,
  ProgressBarWrapper,
} from "@/app/onboard-survey/components/SurveyProgressBar.styles";
import React from "react";

interface SurveyProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const SurveyProgressBar: React.FC<SurveyProgressBarProps> = ({ currentStep, totalSteps }) => {
  const arr = Array.from({ length: totalSteps });
  return (
    <ProgressBarWrapper>
      {arr.map((_, idx) => (
        <ProgressBar key={idx} isActive={idx === currentStep - 1} />
      ))}
    </ProgressBarWrapper>
  );
};

export default SurveyProgressBar;
