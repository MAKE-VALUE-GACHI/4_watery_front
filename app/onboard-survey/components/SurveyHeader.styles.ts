import { verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const surveyHeaderStyles = StyleSheet.create({
  SurveyHeaderContainer: {
    // 추가 스타일 필요시 여기에 작성
  },
  SurveyHeaderWrapper: {
    marginBottom: verticalScale(16),
  },
});

export default surveyHeaderStyles;
