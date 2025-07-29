import { commonStyles } from "@/components/common.styles";
import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import { slideHeaderStyles } from "@/components/CustomSlide/SlideHeader.styles";
import { BN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { horizontalScale } from "@/libs/utils/scaling";

interface SlideHeaderProps {
  beverageVariant: BeverageVariantType;
  currentValue: number;
}

const beverageMeta = {
  water: {
    label: "물",
    color: Colors.waves.water[0],
  },
  coffee: {
    label: "커피",
    color: Colors.waves.coffee[0],
  },
  greenTea: {
    label: "녹차",
    color: Colors.waves.green_tea[0],
  },
  cola: {
    label: "콜라",
    color: Colors.waves.cola[0],
  },
} as const;

const SlideHeader: React.FC<SlideHeaderProps> = ({ beverageVariant, currentValue }) => {
  const { label, color } = beverageMeta[beverageVariant] ?? beverageMeta.water;

  return (
    <ThemedView style={[commonStyles.transparentFlexRow, slideHeaderStyles.slideHeaderContainer]}>
      <BN1 style={{ color }}>{label}</BN1>
      <ThemedView style={{ ...commonStyles.transparentFlexRow, gap: horizontalScale(4) }}>
        <BN1 style={[slideHeaderStyles.slideHeaderMeasurement, { color }]}>{currentValue}</BN1>
        <BN1 style={{ color: Colors.neutral_400 }}>ml</BN1>
      </ThemedView>
    </ThemedView>
  );
};

export default SlideHeader;
