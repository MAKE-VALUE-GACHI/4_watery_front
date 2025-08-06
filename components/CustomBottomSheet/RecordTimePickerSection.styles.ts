import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

export const recordTimePickerSectionStyles = StyleSheet.create({
  timePickerWrapper: {
    ...commonStyles.flexRow,
    justifyContent: "center",
    alignItems: "center",
  },
  wheelPickerSelectedItem: {
    borderColor: Colors.neutral_200,
    borderWidth: horizontalScale(1),
  },
  timeDot: {
    height: verticalScale(35),
    borderColor: Colors.neutral_200,
    borderTopWidth: horizontalScale(1),
    borderBottomWidth: horizontalScale(1),
    flexDirection: "column",
    verticalAlign: "middle",
    fontWeight: "bold",
  },
});
