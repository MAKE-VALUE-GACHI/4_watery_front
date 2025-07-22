import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

// margin-bottom = 24px + bottom-tab 48px
export const indexStyles = StyleSheet.create({
  SurveyPageContainer: {
    flex: 1,
    marginBottom: verticalScale(72),
  },
  SurveyContentWrapper: {
    flex: 1,
    ...paddingScale(12, 32),
  },
});

export default indexStyles;
