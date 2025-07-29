import { StyleSheet } from "react-native";
import { horizontalScale, marginScale, verticalScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";

const addNewRecordStyles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    gap: verticalScale(24),
  },
  header: {
    ...commonStyles.flexRow,
    justifyContent: "space-between",
  },
  inputMeasurement: {
    ...commonStyles.flexRow,
    gap: horizontalScale(12),
    alignItems: "center",
  },
  sliderWrapper: {
    flex: 1,
    ...marginScale(20, 0),
  },
});

export default addNewRecordStyles;
