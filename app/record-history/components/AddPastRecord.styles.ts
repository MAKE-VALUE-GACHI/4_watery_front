import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";
import { horizontalScale } from "@/libs/utils/scaling";

export const addPastRecordStyles = StyleSheet.create({
  timeModeHeader: {
    ...commonStyles.flexRow,
    gap: horizontalScale(16),
    alignItems: "center",
  },
});
