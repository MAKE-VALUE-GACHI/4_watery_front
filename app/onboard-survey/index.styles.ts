import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  SurveyPageContainer: {
    flex: 1,
    paddingBottom: verticalScale(24),
  },
  SurveyContentWrapper: {
    flex: 1,
    ...paddingScale(12, 32),
  },
});

export default indexStyles;
