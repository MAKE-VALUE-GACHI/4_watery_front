import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";
import { horizontalScale } from "@/libs/utils/scaling";

export const recordAmountSectionStyles = StyleSheet.create({
  header: {
    ...commonStyles.flexRow,
    justifyContent: "space-between",
  },
  inputMeasurement: {
    ...commonStyles.flexRow,
    gap: horizontalScale(12),
    alignItems: "center",
  },
});
