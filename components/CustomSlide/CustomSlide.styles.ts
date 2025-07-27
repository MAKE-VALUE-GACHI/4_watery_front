import { Colors } from "@/constants/Colors";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const customSlideStyles = StyleSheet.create({
  StyledLinearGradient: {
    borderRadius: verticalScale(24),
    height: verticalScale(436),
  },
  SlideContainer: {
    flex: 1,
    borderWidth: horizontalScale(1),
    borderColor: Colors.neutral_000,
    borderRadius: verticalScale(24),
    margin: verticalScale(1),
    ...paddingScale(12),
  },
  SlideBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  IconWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.neutral_000,
    backgroundColor: "transparent",
  },
});
