import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

const historyListItemStyles = StyleSheet.create({
  itemContainer: {
    // width: horizontalScale(311),
    height: verticalScale(32),
    backgroundColor: Colors.neutral_000,
    borderRadius: 4,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  index: {
    width: horizontalScale(18),
    height: verticalScale(20),
    marginLeft: 0, // Row 기준 paddingLeft로 충분
    textAlign: "center",
    fontWeight: "500",
    color: Colors.neutral_300,
  },

  volume: {
    width: horizontalScale(47),
    height: verticalScale(20),
    marginLeft: horizontalScale(8),
    fontWeight: "400",
    color: Colors.neutral_500,
  },

  drinkType: {
    width: horizontalScale(80),
    height: horizontalScale(20),
    marginLeft: horizontalScale(24), // volume → drinkType 사이
    fontWeight: "400",
    color: Colors.neutral_500,
  },

  timeBox: {
    marginLeft: "auto", // ✅ Row 오른쪽 끝 정렬
    width: horizontalScale(67),
    height: verticalScale(18),
    backgroundColor: Colors.primary_010,
    borderRadius: 4,
    paddingHorizontal: horizontalScale(4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  timeText: {
    width: horizontalScale(59),
    height: verticalScale(18),
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
    textAlign: "right",
    color: Colors.primary_500,
    letterSpacing: 0.26,
  },
});

export default historyListItemStyles;
