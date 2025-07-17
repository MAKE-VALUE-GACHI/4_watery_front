import { StepContainer } from "@/app/onboard-survey/steps/steps.styles";
import SurveyOption from "@/components/SurveyOption/SurveyOption";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const genderOptions = ["남성", "여성", "선택하지 않음"];

interface GenderStepProps {
  onSelectionChange?: (selected: boolean) => void;
}

const GenderStep = ({ onSelectionChange }: GenderStepProps) => {
  const { setValue, watch } = useFormContext();
  const gender = watch("gender");
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);

  useEffect(() => {
    if (gender) {
      setSelectedOptionIdx(genderOptions.indexOf(gender) + 1);
    } else {
      setSelectedOptionIdx(0);
    }
  }, [gender]);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedOptionIdx !== 0);
    }
  }, [selectedOptionIdx, onSelectionChange]);

  const changeSelectedOption = (idx: number) => {
    setSelectedOptionIdx(idx);
    setValue("gender", idx === 0 ? undefined : genderOptions[idx - 1]);
  };

  return (
    <StepContainer>
      {genderOptions.map((option, idx) => (
        <SurveyOption
          key={`gender_option_${idx}`}
          title={option}
          isSelected={selectedOptionIdx === idx + 1}
          optionIdx={idx + 1}
          onPress={() => changeSelectedOption(idx + 1)}
        />
      ))}
    </StepContainer>
  );
};

export default GenderStep;
