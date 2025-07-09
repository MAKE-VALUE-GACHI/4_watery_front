import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

interface AboveThumbProps {
  sliderVal: number;
}

const AboveThumb: React.FC<AboveThumbProps> = ({ sliderVal }) => {
  return (
    <ThemedView>
      <ThemedText>{sliderVal}</ThemedText>
    </ThemedView>
  );
};

export default AboveThumb;
