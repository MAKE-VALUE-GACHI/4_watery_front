import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { BN2, H2 } from "@/components/ThemedText";

interface SurveyHeaderProps {
  currentStep: number;
  totalSteps: number;
  categoryName: string;
}

const SurveyHeader: React.FC<SurveyHeaderProps> = ({ currentStep, totalSteps, categoryName }) => {
  return (
    <ThemedView>
      <H2>{categoryName}을</H2>
      <H2>선택해 주세요.</H2>
      <BN2>정확한 목표 수분량을 얻기 위해 필요해요.</BN2>
    </ThemedView>
  );
};

export default SurveyHeader;
