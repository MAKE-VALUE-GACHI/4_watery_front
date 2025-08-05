import { StyleSheet } from "react-native";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";

const todayGoalStyles = StyleSheet.create({
  mainHeader: {
    height: verticalScale(102),
    borderRadius: verticalScale(24), // 기존 16 -> 24 변경
    ...paddingScale(12),
    ...commonStyles.blurCard,
    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  },
  headerDesc: {
    ...commonStyles.flexRow,
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  progressBar: {
    marginTop: verticalScale(8),
  },
});

export default todayGoalStyles;
