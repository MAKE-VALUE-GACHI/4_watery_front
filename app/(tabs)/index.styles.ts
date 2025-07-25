import { commonStyles } from "@/components/common.styles";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const tabsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...commonStyles.pageContainer,
    ...commonStyles.transparentView,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    ...commonStyles.transparentView,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
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

export default tabsStyles;
