import { StyleSheet } from "react-native";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";

export const commonHeaderStyles = StyleSheet.create({
  emptyHeader: {
    height: verticalScale(56),
  },
  commonHeaderContainer: {
    height: verticalScale(56),
    justifyContent: "center",
    ...paddingScale(16),
  },
});
