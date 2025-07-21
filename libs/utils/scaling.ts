import { Dimensions, PixelRatio } from "react-native";

// 기준 해상도 (디자인 기준, ex: iPhone 11 = 375 x 812)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// 현재 디바이스 해상도
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

/**
 * 수평 기준 스케일 (너비 조절)
 */
export const horizontalScale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * 수직 기준 스케일 (높이 조절)
 */
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

/**
 * 보정값을 포함한 중간 스케일 (글꼴 등 조정 시)
 * factor 기본값은 0.5 (0이면 수평스케일, 1이면 수직스케일)
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

/**
 * 폰트 사이즈 조절
 */
export const scaleFont = (size: number) => {
  const scale = SCREEN_WIDTH / guidelineBaseWidth;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * padding shorthand 유틸리티 (styled-components/native용)
 * 1~4개의 인자를 받아 각각 top, right, bottom, left에 verticalScale/horizontalScale을 적용
 * 사용 예시: ${paddingScale(12)}, ${paddingScale(12, 32)}, ${paddingScale(12, 16, 20, 24)}
 */
export const paddingScale = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  // CSS padding shorthand처럼 동작
  const t = verticalScale(top);
  const r = verticalScale(right ?? top);
  const b = verticalScale(bottom ?? top);
  const l = verticalScale(left ?? right ?? top);
  return `
    padding-top: ${t};
    padding-right: ${r};
    padding-bottom: ${b};
    padding-left: ${l};
  `;
};

/**
 * margin shorthand 유틸리티 (styled-components/native용)
 * 1~4개의 인자를 받아 각각 top, right, bottom, left에 verticalScale/horizontalScale을 적용
 * 사용 예시: ${marginScale(12)}, ${marginScale(12, 32)}, ${marginScale(12, 16, 20, 24)}
 */
export const marginScale = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  // CSS margin shorthand처럼 동작
  const t = verticalScale(top);
  const r = verticalScale(right ?? top);
  const b = verticalScale(bottom ?? top);
  const l = verticalScale(left ?? right ?? top);
  return `
    margin-top: ${t};
    margin-right: ${r};
    margin-bottom: ${b};
    margin-left: ${l};
  `;
};
