import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

const CustomBottomSheetRoundFixedStyles = StyleSheet.create({
  gradientWrapper: {
    width: horizontalScale(343),
    borderRadius: horizontalScale(24),
    borderWidth: 1,
    borderColor: Colors.neutral_000,
    padding: 0,
    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  },
  innerContent: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    gap: verticalScale(16),
  },
});

export default CustomBottomSheetRoundFixedStyles;
