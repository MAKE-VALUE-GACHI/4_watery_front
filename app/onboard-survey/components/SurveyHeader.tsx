import { surveyHeaderStyles } from "@/app/onboard-survey/components/SurveyHeader.styles";
import { LR1, T3 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { commonStyles } from "@/components/common.styles";
import { ThemedView } from "@/components/ThemedView";

interface SurveyHeaderProps {
  currentStep: number;
  totalSteps: number;
  categoryName: string;
}

const SurveyHeader: React.FC<SurveyHeaderProps> = ({ currentStep, totalSteps, categoryName }) => {
  return (
    <ThemedView style={surveyHeaderStyles.SurveyHeaderContainer}>
      <ThemedView style={surveyHeaderStyles.SurveyHeaderWrapper}>
        <ThemedView style={commonStyles.FlexRow}>
          <T3 lightColor={Colors.neutral_900}>{categoryName}</T3>
          <T3 lightColor={Colors.neutral_500}>을</T3>
        </ThemedView>
        <T3 lightColor={Colors.neutral_500}>선택해 주세요.</T3>
      </ThemedView>
      <LR1 lightColor={Colors.neutral_600}>정확한 목표 수분량을 얻기 위해 필요해요.</LR1>
    </ThemedView>
  );
};

export default SurveyHeader;
