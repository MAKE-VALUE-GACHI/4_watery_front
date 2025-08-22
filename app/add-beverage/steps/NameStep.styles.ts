import styled from "styled-components/native";
import { horizontalScale, verticalScale, scaleFont } from "@/libs/utils/scaling";

/** Step Title (pt-40, px-20) */
export const StepTitleContainer = styled.View`
  padding-top: ${verticalScale(35)}px;
  flex-direction: row;
  align-items: center;
`;

/** Icon (px-8, padding=1dp, 20x20dp) */
export const IconWrapper = styled.View`
  padding: ${verticalScale(1)}px;
  margin-right: ${horizontalScale(8)}px;
  align-items: center;
  justify-content: center;
`;

/** Title Text: Body2/Bold (15/22.01, #58616A, ls 0.14) */
export const StepTitleText = styled.Text`
  font-size: ${scaleFont(15)}px;
  line-height: ${verticalScale(22.01)}px;
  font-weight: 700;
  color: #58616a;
  letter-spacing: 0.14px;
`;

/** InputForm Wrapper (px-34, pt-24 from subtitle) */
export const InputSection = styled.View`
  padding-top: ${verticalScale(24)}px;
`;

/** InputForm Title (pl-8), Label1/Bold (14/20.01, #58616A, ls 0.2) */
export const InputTitle = styled.Text`
  padding-left: ${horizontalScale(8)}px;
  font-size: ${scaleFont(14)}px;
  line-height: ${verticalScale(20.01)}px;
  font-weight: 700;
  color: #58616a;
  letter-spacing: 0.2px;
  margin-bottom: ${verticalScale(8)}px;
`;

/** Input (311x54, radius 12, border #CDD1D5, bg #FFF, padding 16/16/16/127) */
export const NameInput = styled.TextInput`
  width: ${horizontalScale(311)}px;
  height: ${verticalScale(54)}px;
  border-width: 1px;
  border-color: #cdd1d5;
  border-radius: 12px;
  background-color: #ffffff;

  padding-top: ${verticalScale(16)}px;
  padding-bottom: ${verticalScale(16)}px;
  padding-left: ${horizontalScale(16)}px;
  padding-right: ${horizontalScale(127)}px;

  /* 텍스트 자체 스타일(placeholder에는 색만 적용 가능) */
  font-size: ${scaleFont(15)}px;
  line-height: ${verticalScale(22.01)}px;
  letter-spacing: 0.14px;
  font-weight: 400;
  color: #121212;
`;
