import { StyleSheet } from "react-native";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";
import { Colors } from "@/constants/Colors";

const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...paddingScale(16),
    gap: verticalScale(16),
  },
  goalContentContainer: {
    ...paddingScale(8, 0),
    gap: verticalScale(12),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: Colors.neutral_100,
  },
  goalWrapper: {
    ...commonStyles.flexRow,
    alignItems: "center",
    gap: horizontalScale(16),
    ...paddingScale(0, 12),
  },
  goalText: {
    fontWeight: "500",
  },
  badgeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: verticalScale(4),
    ...paddingScale(4),
  },
  alarmContainer: {
    ...paddingScale(12),
    gap: verticalScale(8),
  },
  alarmWrapper: {
    ...commonStyles.flexRow,
    justifyContent: "space-between",
  },
  alarmTitle: {
    fontWeight: "500",
  },
  versionInfoContainer: {
    ...paddingScale(12, 8, 12, 12),
    ...commonStyles.flexRow,
    justifyContent: "space-between",
  },
  versionInfoWrapper: {
    fontWeight: "500",
  },
});

export default settingsStyles;
