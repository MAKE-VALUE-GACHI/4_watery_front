import { surveyOptionStyles } from "@/components/SurveyOption/SurveyOption.styles";
import { BN1, LN1 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable } from "react-native";
import { horizontalScale } from "@/libs/utils/scaling";

interface SurveyOptionProps {
  optionIdx: number;
  title: string;
  isSelected: boolean;
  onPress: () => void;
  icon?: React.ReactNode;
  description?: string;
}

const BeverageOption: React.FC<SurveyOptionProps> = ({
  title,
  isSelected,
  onPress,
  icon,
  description,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        surveyOptionStyles.SurveyOptionWrapper,
        {
          backgroundColor: isSelected ? Colors.primary_600 : Colors.primary_010,
          gap: horizontalScale(6),
        },
      ]}
    >
      {icon ? icon : null}
      <ThemedView
        style={[
          surveyOptionStyles.SurveyTextWrapper,
          { gap: 6, alignItems: description !== undefined ? "flex-start" : "center" },
        ]}
      >
        <BN1
          lightColor={isSelected ? Colors.neutral_000 : Colors.primary_700}
          style={{ fontWeight: "bold" }}
        >
          {title}
        </BN1>
        {description ? (
          <LN1 lightColor={isSelected ? Colors.neutral_000 : Colors.neutral_500}>{description}</LN1>
        ) : null}
      </ThemedView>
    </Pressable>
  );
};

export default BeverageOption;
