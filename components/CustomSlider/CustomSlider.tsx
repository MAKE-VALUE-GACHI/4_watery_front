import AboveThumb from "@/components/CustomSlider/AboveThumb";
import TrackMark from "@/components/CustomSlider/TrackMark";
import { SliderProps } from "@miblanchard/react-native-slider";
import React from "react";
import { StyledSlider } from "@/components/CustomSlider/CustomSlider.styles";

interface CustomSliderProps
  extends Omit<SliderProps, "renderAboveThumbComponent" | "renderTrackMarkComponent"> {
  sliderVal: number;
  onValueChange: (value: number[]) => void;
  trackMarks?: number[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  sliderVal,
  onValueChange,
  trackMarks = [0, 200, 400, 600, 800, 1000],
  ...props
}) => {
  const renderTrackMark = (index: number) => <TrackMark value={trackMarks[index]} />;
  const renderAboveThumb = () => <AboveThumb sliderVal={sliderVal} />;

  return (
    <StyledSlider
      value={sliderVal}
      onValueChange={onValueChange}
      trackMarks={trackMarks}
      renderAboveThumbComponent={renderAboveThumb}
      renderTrackMarkComponent={renderTrackMark}
      {...props}
    />
  );
};

export default CustomSlider;
