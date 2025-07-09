import AboveThumb from "@/components/CustomSlider/AboveThumb";
import TrackMark from "@/components/CustomSlider/TrackMark";
import { Colors } from "@/constants/Colors";
import { Slider, SliderProps } from "@miblanchard/react-native-slider";
import React from "react";
import styled from "styled-components/native";

interface CustomSliderProps
  extends Omit<SliderProps, "renderAboveThumbComponent" | "renderTrackMarkComponent"> {
  sliderVal: number;
  onValueChange: (value: number[]) => void;
  trackMarks?: number[];
}

const StyledCSlider = styled(Slider).attrs(() => ({
  containerStyle: {
    backgroundColor: Colors.primary_050,
  },
  thumbStyle: {
    width: 40,
    height: 40,
    borderRadius: 48,
    backgroundColor: Colors.neutral_600,
    borderWidth: 8,
    borderColor: Colors.neutral_000,
    shadowColor: Colors.neutral_1000,
    shadowRadius: 20,
  },
  trackStyle: {
    height: 6,
    borderRadius: 16,
  },
}))``;

export const CustomSlider: React.FC<CustomSliderProps> = ({
  sliderVal,
  onValueChange,
  trackMarks = [0, 200, 400, 600, 800, 1000],
  ...props
}) => {
  const renderTrackMark = (index: number) => <TrackMark value={trackMarks[index]} />;
  const renderAboveThumb = () => <AboveThumb sliderVal={sliderVal} />;

  return (
    <StyledCSlider
      value={sliderVal}
      onValueChange={onValueChange}
      trackMarks={trackMarks}
      renderAboveThumbComponent={renderAboveThumb}
      renderTrackMarkComponent={renderTrackMark}
      {...props}
    />
  );
};
