import { StyleSheet } from "react-native";
import { paddingScale } from "@/libs/utils/scaling";

export const commonStyles = StyleSheet.create({
  pageContainer: {
    // main 페이지 기준 패딩 적용
    ...paddingScale(8, 16),
  },
  transparentView: {
    backgroundColor: "transparent",
  },
  transparentFlexRow: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  flexRow: {
    flexDirection: "row",
  },
});
