import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

export const splashStyles = StyleSheet.create({
  container: {
    width: horizontalScale(375),
    height: verticalScale(812),
    paddingLeft: horizontalScale(48),
    paddingTop: verticalScale(176),
    paddingRight: horizontalScale(202),
    paddingBottom: verticalScale(577),
    backgroundColor: "#FFFFFF",
  },
  logo: {
    alignSelf: "center",
    // width: horizontalScale(125),
    // height: verticalScale(59),
    // logo: {
    //   marginTop: verticalScale(176),
    //   marginLeft: horizontalScale(48),
    // },
  },
  subText: {
    marginLeft: verticalScale(4),
    marginTop: verticalScale(2), // 로고 아래 2dp 간격
    width: horizontalScale(100),
    height: verticalScale(22),
    fontWeight: "600",
    color: Colors.neutral_400,
  },
  buttonGroup: {
    position: "absolute",
    bottom: verticalScale(300),
    alignSelf: "center",
    gap: verticalScale(12),
  },
});

export default splashStyles;
