import { aboveThumbStyles } from "@/components/CustomSlider/AboveThumb.styles";
import { BN1 } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

interface AboveThumbProps {
  sliderVal: number;
}

const AboveThumb: React.FC<AboveThumbProps> = ({ sliderVal }) => {
  return (
    <ThemedView style={aboveThumbStyles.aboveThumbContainer}>
      <BN1 style={aboveThumbStyles.aboveThumbText}>{sliderVal}</BN1>
    </ThemedView>
  );
};

export default AboveThumb;
