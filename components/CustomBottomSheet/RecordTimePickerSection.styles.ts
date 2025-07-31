import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";

export const recordTimePickerSectionStyles = StyleSheet.create({
  timePickerWrapper: {
    ...commonStyles.flexRow,
    justifyContent: "center",
    alignItems: "center",
  },
});
