import React from "react";
import { AboveThumbContainer, AboveThumbText } from "@/components/CustomSlider/AboveThumb.styles";

interface AboveThumbProps {
  sliderVal: number;
}

const AboveThumb: React.FC<AboveThumbProps> = ({ sliderVal }) => {
  return (
    <AboveThumbContainer>
      <AboveThumbText>{sliderVal}</AboveThumbText>
    </AboveThumbContainer>
  );
};

export default AboveThumb;
