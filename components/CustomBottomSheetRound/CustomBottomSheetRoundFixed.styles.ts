import { StyleSheet, Platform } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

const CustomBottomSheetRoundFixedStyles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    alignSelf: "stretch", // ✅ 전체 너비 차지
    width: horizontalScale(343),
    borderWidth: 1,
    borderColor: Colors.neutral_000,
    borderRadius: horizontalScale(24),

    // iOS shadow
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,

    // Android shadow
    elevation: 10,
    backgroundColor: Colors.neutral_000,
  },
  innerContent: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
  },
  borderWrapper: {
    borderRadius: horizontalScale(32),
    padding: 1, // border 두께
    width: "100%",
    overflow: "hidden",
  },
  // contentWrapper: {
  //   borderRadius: horizontalScale(32),
  //   overflow: "hidden",
  //   width: "100%",
  // },
});

export default CustomBottomSheetRoundFixedStyles;
