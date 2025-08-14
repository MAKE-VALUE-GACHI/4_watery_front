import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

const CustomTabContentStyles = StyleSheet.create({
  emptyBox: {
    // width: horizontalScale(292),
    height: verticalScale(236),
    borderRadius: horizontalScale(8),
    borderWidth: 1,
    borderColor: Colors.neutral_000,
    backgroundColor: "#F6F9FEA3",
    paddingTop: verticalScale(72),
    paddingBottom: verticalScale(92),
    paddingLeft: horizontalScale(58),
    paddingRight: horizontalScale(59),
    alignItems: "center",
    justifyContent: "center",
    // marginTop: verticalScale(6),
    marginLeft: verticalScale(4),
    marginRight: verticalScale(4),
  },
  icon: {
    width: horizontalScale(32),
    height: verticalScale(32),
    marginBottom: verticalScale(20),
  },
  emptyText: {
    height: verticalScale(20),
    fontWeight: "500",
    color: Colors.neutral_500,
    textAlign: "center",
    fontFamily: "Pretendard-Medium",
  },
  // contentContainer: {
  //   paddingHorizontal: horizontalScale(16),
  //   paddingVertical: verticalScale(8),
  // },
  item: {
    paddingVertical: verticalScale(10),
  },

  // 데이터 있을 때
  listWrapper: {
    // width: horizontalScale(292),
    height: verticalScale(236),
    borderRadius: horizontalScale(8),
    backgroundColor: Colors.neutral_000,
    paddingTop: verticalScale(6),
    paddingBottom: verticalScale(6),
    overflow: "hidden",
  },
  contentContainer: {
    gap: verticalScale(6),
    paddingHorizontal: horizontalScale(0),
  },
});

export default CustomTabContentStyles;
