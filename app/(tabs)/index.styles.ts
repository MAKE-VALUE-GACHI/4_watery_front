import { commonStyles } from "@/components/common.styles";
import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

export const tabsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...commonStyles.pageContainer,
    ...commonStyles.transparentView,
  },
  carouselWrapper: {
    marginTop: verticalScale(14),
  },
  todayRecordTop: {
    // marginTop: verticalScale(24),
    paddingLeft: horizontalScale(8),
    width: horizontalScale(343),
    height: verticalScale(28),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todayText: {
    fontWeight: "700",
    color: Colors.neutral_600,
  },
});

export default tabsStyles;
