import { stepsStyles } from "@/app/onboard-survey/steps/steps.styles";
import { useStepSelection } from "@/app/onboard-survey/utils/useStepSelection";
import SurveyOption from "@/components/SurveyOption/SurveyOption";
import { Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const activityOptions = ["low", "normal", "active", "very_active"] as const;

const activityMeta = {
  low: {
    label: "거의 운동하지 않아요",
    description: "주 0회",
    icon: require("@/assets/icons/activity-low.png"),
  },
  normal: {
    label: "가볍게 움직이는 편이에요",
    description: "주 1-2회 걷기 등",
    icon: require("@/assets/icons/activity-normal.png"),
  },
  active: {
    label: "일주일에 몇 번은 운동해요",
    description: "주 3-4회 유산소/근력 등",
    icon: require("@/assets/icons/activity-active.png"),
  },
  very_active: {
    label: "메일 운동하거나 활동량이 많아요",
    description: "주 5회 이상 고강도 운동 등",
    icon: require("@/assets/icons/activity-very-active.png"),
  },
} as const;

interface ActivityStepProps {
  onSelectionChange?: (selected: boolean) => void;
}

const ActivityStep = ({ onSelectionChange }: ActivityStepProps) => {
  const { selectedIdx, changeSelectedOption } = useStepSelection(
    "activity",
    activityOptions as unknown as string[],
    onSelectionChange,
  );

  return (
    <ThemedView style={stepsStyles.StepContainer}>
      {activityOptions.map((option, idx) => (
        <SurveyOption
          key={`activity_option_${idx}`}
          title={activityMeta[option].label}
          description={activityMeta[option].description}
          isSelected={selectedIdx === idx + 1}
          optionIdx={idx + 1}
          icon={
            <ThemedView style={stepsStyles.ActivityIconWrapper}>
              <Image
                source={activityMeta[option].icon}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </ThemedView>
          }
          onPress={() => changeSelectedOption(idx + 1)}
        />
      ))}
    </ThemedView>
  );
};

export default ActivityStep;
