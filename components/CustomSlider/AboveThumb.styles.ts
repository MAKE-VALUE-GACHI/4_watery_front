import { Colors } from "@/constants/Colors";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const aboveThumbStyles = StyleSheet.create({
  aboveThumbContainer: {
    position: "absolute",
    top: verticalScale(8),
    left: verticalScale(-32),
    minWidth: verticalScale(64),
    justifyContent: "center",
    alignItems: "center",
    ...paddingScale(4, 12),
    borderRadius: verticalScale(8),
    backgroundColor: Colors.primary_050,
  },
  aboveThumbText: {
    color: Colors.primary_900,
    fontWeight: "bold",
  },
});
