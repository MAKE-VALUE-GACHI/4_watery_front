import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const progressBarStyles = StyleSheet.create({
  ProgressBarWrapper: {
    flexDirection: "row",
    ...paddingScale(0, 20),
    gap: verticalScale(8),
    marginBottom: verticalScale(34),
  },
  ProgressBar: {
    height: verticalScale(5),
    borderRadius: verticalScale(7),
    flex: 1,
  },
});

export default progressBarStyles;
