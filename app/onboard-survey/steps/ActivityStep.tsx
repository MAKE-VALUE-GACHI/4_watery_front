import { StepContainer } from "@/app/onboard-survey/steps/steps.styles";
import { useStepSelection } from "@/app/onboard-survey/utils/useStepSelection";
import SurveyOption from "@/components/SurveyOption/SurveyOption";

const activityOptions = ["low", "normal", "active", "very_active"];

interface ActivityStepProps {
  onSelectionChange?: (selected: boolean) => void;
}

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

const ActivityStep = ({ onSelectionChange }: ActivityStepProps) => {
  const { selectedIdx, changeSelectedOption } = useStepSelection(
    "activity",
    activityOptions,
    onSelectionChange,
  );

  return (
    <StepContainer>
      {activityOptions.map((option, idx) => (
        <SurveyOption
          key={`activity_option_${idx}`}
          title={optionToString(option)}
          isSelected={selectedIdx === idx + 1}
          optionIdx={idx + 1}
          onPress={() => changeSelectedOption(idx + 1)}
        />
      ))}
    </StepContainer>
  );
};

export default ActivityStep;
