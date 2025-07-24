import { stepsStyles } from "@/app/onboard-survey/steps/steps.styles";
import { useStepSelection } from "@/app/onboard-survey/utils/useStepSelection";
import SurveyOption from "@/components/SurveyOption/SurveyOption";
import React from "react";
import { ThemedView } from "@/components/ThemedView";

const genderOptions = ["남성", "여성", "선택하지 않음"];

interface GenderStepProps {
  onSelectionChange?: (selected: boolean) => void;
}

const GenderStep: React.FC<GenderStepProps> = ({ onSelectionChange }) => {
  const { selectedIdx, changeSelectedOption } = useStepSelection(
    "gender",
    genderOptions,
    onSelectionChange,
  );

  return (
    <ThemedView style={stepsStyles.StepContainer}>
      {genderOptions.map((option, idx) => (
        <SurveyOption
          key={`gender_option_${idx}`}
          title={option}
          isSelected={selectedIdx === idx + 1}
          optionIdx={idx + 1}
          onPress={() => changeSelectedOption(idx + 1)}
        />
      ))}
    </ThemedView>
  );
};

export default GenderStep;
