import { StyleSheet } from "react-native";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";

export const commonHeaderStyles = StyleSheet.create({
  emptyHeader: {
    height: verticalScale(56),
  },
  commonHeaderContainer: {
    flexDirection: "row",
    height: verticalScale(56),
    gap: horizontalScale(16),
    alignItems: "center",
    ...paddingScale(16),
  },
});
