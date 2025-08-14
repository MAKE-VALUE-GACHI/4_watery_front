import { StyleSheet } from "react-native";
import { verticalScale } from "@/libs/utils/scaling";

const addNewRecordStyles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    gap: verticalScale(24),
  },
});

export default addNewRecordStyles;
