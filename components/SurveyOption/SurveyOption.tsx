import { SurveyOptionWrapper } from "@/components/SurveyOption/SurveyOption.styles";
import { BN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";

interface SurveyOptionProps {
  optionIdx: number;
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

const SurveyOption: React.FC<SurveyOptionProps> = ({ title, isSelected, onPress }) => {
  return (
    <SurveyOptionWrapper
      onPress={onPress}
      style={() => ({
        backgroundColor: isSelected ? Colors.primary_600 : Colors.primary_010,
      })}
    >
      <BN1
        lightColor={isSelected ? Colors.neutral_000 : Colors.primary_700}
        style={{ fontWeight: "bold" }}
      >
        {title}
      </BN1>
    </SurveyOptionWrapper>
  );
};

export default SurveyOption;
