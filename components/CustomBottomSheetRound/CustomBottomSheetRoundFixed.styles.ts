import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

const CustomBottomSheetRoundFixedStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: horizontalScale(12),
    right: horizontalScale(12),
    bottom: verticalScale(48),
    alignItems: "center",
    borderRadius: horizontalScale(24),
    borderWidth: 1,
    borderColor: Colors.neutral_000, // ✅ 경계선
    padding: 0,
    overflow: "hidden", // ✅ 라운드 및 그림자 적용을 위해 hidden

    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 6 },
    // shadowOpacity: 0.1,
    // shadowRadius: 12,
    // elevation: 6,
  },
  innerContent: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    gap: verticalScale(16),
    backgroundColor: "transparent", // ← 이거 대신
  },
});

export default CustomBottomSheetRoundFixedStyles;
