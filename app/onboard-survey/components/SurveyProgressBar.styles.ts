import { verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const progressBarStyles = StyleSheet.create({
  ProgressBarWrapper: {
    flexDirection: "row",
    paddingLeft: verticalScale(20),
    paddingRight: verticalScale(20),
    gap: verticalScale(8),
    marginBottom: verticalScale(34),
  },
  ProgressBar: {
    height: verticalScale(5),
    borderRadius: verticalScale(7),
    flex: 1,
    // backgroundColor는 isActive prop에 따라 컴포넌트에서 동적으로 지정하세요
  },
});

export default progressBarStyles;
