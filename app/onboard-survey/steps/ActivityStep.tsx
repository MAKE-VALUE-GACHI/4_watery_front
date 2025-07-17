import { StepContainer } from "@/app/onboard-survey/steps/steps.styles";
import SurveyOption from "@/components/SurveyOption/SurveyOption";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const activityOptions = ["low", "normal", "active", "very_active"];

const ActivityStep = () => {
  const { setValue, watch } = useFormContext();
  const activity = watch("activity");
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);

  useEffect(() => {
    if (activity) {
      setSelectedOptionIdx(activityOptions.indexOf(activity) + 1);
    } else {
      setSelectedOptionIdx(0);
    }
  }, [activity]);

  const optionToString = (option: string) => {
    switch (option) {
      case "low":
        return "거의 운동하지 않아요";

      case "normal":
        return "가볍게 움직이는 편이에요";

      case "active":
        return "일주일에 몇 번은 운동해요";

      case "very_active":
        return "메일 운동하거나 활동량이 많아요";

      default:
        return "가볍게 움직이는 편이에요";
    }
  };

  const changeSelectedOption = (idx: number) => {
    setSelectedOptionIdx(idx);
    setValue("activity", idx === 0 ? undefined : activityOptions[idx - 1]);
  };

  return (
    <StepContainer>
      {activityOptions.map((option, idx) => (
        <SurveyOption
          key={`activity_option_${idx}`}
          title={optionToString(option)}
          isSelected={selectedOptionIdx === idx + 1}
          optionIdx={idx + 1}
          onPress={() => changeSelectedOption(idx + 1)}
        />
      ))}
    </StepContainer>
  );
};

export default ActivityStep;
