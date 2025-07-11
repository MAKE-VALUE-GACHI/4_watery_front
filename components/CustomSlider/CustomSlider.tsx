import AboveThumb from "@/components/CustomSlider/AboveThumb";
import { StyledSlider } from "@/components/CustomSlider/CustomSlider.styles";
import TrackMark from "@/components/CustomSlider/TrackMark";
import { SliderProps } from "@miblanchard/react-native-slider";
import React from "react";

interface CustomSliderProps
  extends Omit<SliderProps, "renderAboveThumbComponent" | "renderTrackMarkComponent"> {
  sliderVal: number;
  onValueChange: (value: number[]) => void;
  trackMarks?: number[];
}

/**
 * CustomSlider
 *
 * 커스텀 썸(thumb)과 트랙 마크(track mark)를 지원하는 재사용 가능한 슬라이더 컴포넌트입니다.
 * - @miblanchard/react-native-slider를 감싸고, 커스텀 UI를 제공합니다.
 * - 썸 위에 값 표시, 트랙 마크 렌더링 기능을 포함합니다.
 *
 * @component
 * @param {number} sliderVal - 현재 슬라이더 값
 * @param {(value: number[]) => void} onValueChange - 값 변경 시 호출되는 콜백
 * @param {number[]} [trackMarks] - 트랙 마크로 표시할 값 배열
 * @param {SliderProps} [props] - 추가 슬라이더 속성 (renderAboveThumbComponent, renderTrackMarkComponent 제외)
 * @returns {JSX.Element}
 */
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
