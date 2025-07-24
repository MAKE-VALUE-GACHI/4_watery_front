import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import progressBarStyles from "@/app/onboard-survey/components/SurveyProgressBar.styles";

interface SurveyProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const SurveyProgressBar: React.FC<SurveyProgressBarProps> = ({ currentStep, totalSteps }) => {
  const arr = Array.from({ length: totalSteps });
  return (
    <ThemedView style={progressBarStyles.ProgressBarWrapper}>
      {arr.map((_, idx) => (
        <ThemedView
          key={idx}
          style={[
            progressBarStyles.ProgressBar,
            { backgroundColor: idx === currentStep - 1 ? Colors.primary_800 : Colors.primary_050 },
          ]}
        />
      ))}
    </ThemedView>
  );
};

export default SurveyProgressBar;
