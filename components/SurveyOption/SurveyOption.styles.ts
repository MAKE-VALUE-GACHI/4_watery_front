import { Colors } from "@/constants/Colors";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const surveyOptionStyles = StyleSheet.create({
  SurveyOptionWrapper: {
    width: "100%",
    ...paddingScale(18, 16),
    borderWidth: 1,
    borderColor: Colors.primary_100,
    borderRadius: verticalScale(12),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(81),
  },
  SurveyTextWrapper: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
