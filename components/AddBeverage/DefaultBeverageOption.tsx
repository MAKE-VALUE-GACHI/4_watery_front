import React, { memo } from "react";
import { L2 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { OptionBase, OptionInner, BeverageText } from "./DefaultBeverageOption.styles";

interface SurveyOptionProps {
  optionIdx: number;
  title: "커피" | "녹차" | "콜라";
  isSelected: boolean;
  onPress: () => void;
}

const beverageColors: Record<SurveyOptionProps["title"], { selected: string }> = {
  커피: { selected: "#8C715F" },
  녹차: { selected: "#4A7C59" },
  콜라: { selected: "#1A1A1A" },
};

const DefaultBeverageOption: React.FC<SurveyOptionProps> = ({ title, isSelected, onPress }) => {
  const { selected } = beverageColors[title];

  return (
    <OptionBase
      onPress={onPress}
      style={[
        // ✅ 동적 스타일을 style 배열로 이동
        {
          backgroundColor: isSelected ? selected : "#FFFFFF",
          borderWidth: isSelected ? 0 : 1,
        },
      ]}
    >
      <OptionInner>
        <L2
          style={[BeverageText, { color: isSelected ? Colors.neutral_000 : Colors.neutral_500 }]}
          numberOfLines={1}
          ellipsizeMode="clip"
        >
          {title}
        </L2>
      </OptionInner>
    </OptionBase>
  );
};

export default memo(DefaultBeverageOption);
