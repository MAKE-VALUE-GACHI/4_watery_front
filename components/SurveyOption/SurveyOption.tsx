import {
  SurveyOptionWrapper,
  SurveyTextWrapper,
} from "@/components/SurveyOption/SurveyOption.styles";
import { BN1, LN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";

interface SurveyOptionProps {
  optionIdx: number;
  title: string;
  isSelected: boolean;
  onPress: () => void;
  icon?: React.ReactNode;
  description?: string;
}

const SurveyOption: React.FC<SurveyOptionProps> = ({
  title,
  isSelected,
  onPress,
  icon,
  description,
}) => {
  return (
    <SurveyOptionWrapper
      onPress={onPress}
      style={() => ({
        backgroundColor: isSelected ? Colors.primary_600 : Colors.primary_010,
      })}
    >
      {icon ? icon : null}
      <SurveyTextWrapper hasDescription={description !== undefined}>
        <BN1
          lightColor={isSelected ? Colors.neutral_000 : Colors.primary_700}
          style={{ fontWeight: "bold" }}
        >
          {title}
        </BN1>
        {description ? (
          <LN1 lightColor={isSelected ? Colors.neutral_000 : Colors.neutral_500}>{description}</LN1>
        ) : null}
      </SurveyTextWrapper>
    </SurveyOptionWrapper>
  );
};

export default SurveyOption;
