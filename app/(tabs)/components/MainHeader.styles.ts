import { StyleSheet } from "react-native";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";
import { Colors } from "@/constants/Colors";

const mainHeaderStyles = StyleSheet.create({
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
  toSettingsButton: {
    ...commonStyles.flexRow,
    ...paddingScale(6, 4, 6, 8),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: verticalScale(6),
    backgroundColor: Colors.primary_010,
    borderWidth: verticalScale(1),
    borderColor: Colors.neutral_000,
  },
});

export default mainHeaderStyles;
