import { StyleSheet } from "react-native";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";

export const commonHeaderStyles = StyleSheet.create({
  emptyHeader: {
    height: verticalScale(56),
  },
  commonHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // 양 끝 정렬
    height: verticalScale(56),
    width: "100%", // 전체 폭 차지
    ...paddingScale(16), // 좌우 기본 패딩 16
  },
  completeText: {
    paddingRight: horizontalScale(8), // 추가 여백
  },
});
