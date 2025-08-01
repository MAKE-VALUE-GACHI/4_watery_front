import { Colors } from "@/constants/Colors";
import { verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const CustomSliderStyles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(15),
    marginVertical: verticalScale(15),
  },
  thumb: {
    width: verticalScale(40),
    height: verticalScale(40),
    borderRadius: verticalScale(48),
    backgroundColor: Colors.neutral_600,
    borderWidth: verticalScale(4),
    borderColor: Colors.neutral_000,
    shadowColor: Colors.neutral_1000,
    shadowRadius: verticalScale(20),
  },
  track: {
    height: verticalScale(6),
    borderRadius: verticalScale(16),
  },
});
