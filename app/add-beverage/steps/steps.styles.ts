import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

export const stepsStyles = StyleSheet.create({
  addContainer: {
    paddingTop: verticalScale(33),
  },
  StepContainer: {
    paddingTop: verticalScale(35),
  },
  title: {
    fontWeight: "700",
    paddingHorizontal: 8,
  },
  stepTitle: {
    fontWeight: "700",
    paddingHorizontal: 8,
  },
  DefaultButtons: {
    flexDirection: "row",
    gap: horizontalScale(10),
    paddingTop: verticalScale(12),
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(8),
    paddingTop: verticalScale(24),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.neutral_050,
  },
  orText: {
    fontWeight: "500",
    color: Colors.neutral_400,
  },
  customAddButton: {
    marginTop: verticalScale(24),
    width: horizontalScale(311),
    height: verticalScale(96),
    backgroundColor: Colors.primary_010,
    borderColor: Colors.primary_100,
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(28),
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(71),
    justifyContent: "center",
  },
  customAddButtonTitle: {
    fontWeight: "700",
    color: Colors.primary_700,
  },
  customAddButtonDescription: {
    fontWeight: "500",
    color: Colors.neutral_500,
    marginTop: verticalScale(4),
  },
});
