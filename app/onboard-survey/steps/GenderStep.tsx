import { StepContainer } from "@/app/onboard-survey/steps/steps.styles";
import SurveyOption from "@/components/SurveyOption/SurveyOption";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const genderOptions = ["남성", "여성", "선택하지 않음"];

const GenderStep = () => {
  const { setValue, watch } = useFormContext();
  const gender = watch("gender");
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(
    gender ? genderOptions.indexOf(gender) + 1 : 1,
  );

  useEffect(() => {
    if (gender) {
      setSelectedOptionIdx(genderOptions.indexOf(gender) + 1);
    }
  }, [gender]);

  const changeSelectedOption = (idx: number) => {
    setSelectedOptionIdx(idx);
    setValue("gender", genderOptions[idx - 1]);
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
