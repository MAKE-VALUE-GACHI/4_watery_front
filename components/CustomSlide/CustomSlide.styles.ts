import { Colors } from "@/constants/Colors";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const customSlideStyles = StyleSheet.create({
  styledLinearGradient: {
    borderRadius: verticalScale(24),
    height: verticalScale(436),
    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  },
  slideContainer: {
    flex: 1,
    borderWidth: horizontalScale(1),
    borderColor: Colors.neutral_000,
    borderRadius: verticalScale(24),
    margin: verticalScale(1),
    ...paddingScale(12),
  },
  slideBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.neutral_000,
    backgroundColor: "transparent",
  },
});
