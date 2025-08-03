import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

const addPastRecordStyles = StyleSheet.create({
  bottomSheetContainer: {
    gap: verticalScale(24),
  },
  timeModeHeader: {
    ...commonStyles.flexRow,
    gap: horizontalScale(16),
    alignItems: "center",
  },
});

export default addPastRecordStyles;
