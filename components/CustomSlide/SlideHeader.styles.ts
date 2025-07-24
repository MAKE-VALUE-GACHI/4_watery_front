import { paddingScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const slideHeaderStyles = StyleSheet.create({
  SlideHeaderContainer: {
    justifyContent: "space-between",
    backgroundColor: "transparent",
    ...paddingScale(12, 20),
  },
  SlideHeaderMeasurement: {
    fontWeight: "bold",
  },
});
