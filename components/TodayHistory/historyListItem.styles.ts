import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

const historyListItemStyles = StyleSheet.create({
  itemContainer: {
    width: 311,
    height: 32,
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
    height: horizontalScale(20),
    textAlign: "center",
    color: Colors.neutral_300,
  },

  volume: {
    width: horizontalScale(47),
    height: horizontalScale(20),
    marginLeft: 8,
    color: Colors.neutral_500,
  },

  drinkType: {
    width: horizontalScale(80),
    height: horizontalScale(20),
    marginLeft: 24, // volume → drinkType 사이
    color: Colors.neutral_500,
  },

  timeBox: {
    marginLeft: "auto",
    height: horizontalScale(18),
    borderRadius: 4,
    backgroundColor: Colors.primary_010,
    justifyContent: "center",
    paddingHorizontal: 4,
    flexDirection: "row", // ✅ 텍스트 크기 기준으로 확장되게
    alignSelf: "center", // ✅ 자신 크기만큼만 차지하도록 제한
  },

  timeText: {
    textAlign: "right",
    color: Colors.primary_500,
  },
});

export default historyListItemStyles;
