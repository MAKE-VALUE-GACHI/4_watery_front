import { BN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { FlexRow } from "@/components/CustomSlide/CustomSlide.styles";

const Measurement = () => {
  return (
    <FlexRow gap={4}>
      <BN1 style={{ color: Colors.primary_800 }}>400</BN1>
      <BN1 style={{ color: Colors.neutral_400 }}>ml</BN1>
    </FlexRow>
  );
};

export default Measurement;
