import { Colors } from "@/constants/Colors";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const stepsStyles = StyleSheet.create({
  StepContainer: {
    flex: 1,
    paddingTop: verticalScale(48),
    alignItems: "center",
    gap: verticalScale(16),
  },
  ActivityIconWrapper: {
    width: verticalScale(40),
    height: verticalScale(40),
    borderRadius: verticalScale(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.neutral_000,
    ...paddingScale(8),
  },
});

export default stepsStyles;
