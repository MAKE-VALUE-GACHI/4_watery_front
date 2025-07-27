import { paddingScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const slideHeaderStyles = StyleSheet.create({
  slideHeaderContainer: {
    justifyContent: "space-between",
    backgroundColor: "transparent",
    ...paddingScale(12, 20),
  },
  slideHeaderMeasurement: {
    fontWeight: "bold",
  },
});
