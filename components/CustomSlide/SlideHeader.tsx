import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import {
  SlideHeaderContainer,
  SlideHeaderMeasurement,
} from "@/components/CustomSlide/SlideHeader.styles";
import { BN1, HL2 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { TransparentFlexRow } from "@/components/common.styles";

interface SlideHeaderProps {
  beverageVariant: BeverageVariantType;
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

const SlideHeader: React.FC<SlideHeaderProps> = ({ beverageVariant }) => {
  const { label, color } = beverageMeta[beverageVariant] ?? beverageMeta.water;

  return (
    <SlideHeaderContainer>
      <HL2 style={{ color }}>{label}</HL2>
      <TransparentFlexRow gap={4}>
        <SlideHeaderMeasurement style={{ color }}>400</SlideHeaderMeasurement>
        <BN1 style={{ color: Colors.neutral_400 }}>ml</BN1>
      </TransparentFlexRow>
    </SlideHeaderContainer>
  );
};

export default SlideHeader;
