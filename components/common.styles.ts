import { Colors } from "@/constants/Colors";
import { paddingScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

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
  blurCard: {
    borderWidth: 1,
    borderColor: Colors.neutral_000,
    backgroundColor: "#FFFFFF7A",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.03)",
  },
});
