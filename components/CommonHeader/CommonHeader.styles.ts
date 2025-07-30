import { StyleSheet } from "react-native";
import { verticalScale } from "@/libs/utils/scaling";

export const commonHeaderStyles = StyleSheet.create({
  commonHeaderContainer: {
    height: verticalScale(56),
    justifyContent: "center",
  },
});
