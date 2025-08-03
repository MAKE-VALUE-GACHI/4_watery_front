import { StyleSheet } from "react-native";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";

const todayGoalStyles = StyleSheet.create({
  mainHeader: {
    height: verticalScale(102),
    borderRadius: verticalScale(16),
    ...paddingScale(12),
    ...commonStyles.blurCard,
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
