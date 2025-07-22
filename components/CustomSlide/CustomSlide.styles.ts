import { Colors } from "@/constants/Colors";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const customSlideStyles = StyleSheet.create({
  StyledLinearGradient: {
    borderRadius: verticalScale(24),
    // 기타 스타일 필요시 추가
  },
  SlideContainer: {
    borderRadius: verticalScale(24),
    borderWidth: 1,
    borderColor: Colors.neutral_000,
    backgroundColor: "transparent",
    margin: verticalScale(1),
    ...paddingScale(12),
  },
  SlideBody: {
    height: verticalScale(436),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  IconWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.neutral_000,
    backgroundColor: "transparent",
    // 동적 스타일은 style 배열로 합성
  },
});
