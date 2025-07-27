import { StyleSheet } from "react-native";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";
import { commonStyles } from "@/components/common.styles";

const addYourselfSlideStyles = StyleSheet.create({
  slideContainer: {
    height: verticalScale(436),
    borderWidth: horizontalScale(1),
    borderColor: Colors.neutral_000,
    borderRadius: verticalScale(24),
    backgroundColor: "#FFFFFF66",
    margin: verticalScale(1),
    ...paddingScale(24, 32, 32, 32),
    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  },
  slideBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconWrapper: {
    width: horizontalScale(32),
    height: verticalScale(32),
    borderRadius: 100,
    backgroundColor: Colors.neutral_400,
    justifyContent: "center",
    alignItems: "center",
  },
  badgesRow: {
    ...commonStyles.flexRow,
    gap: horizontalScale(4),
    alignItems: "center",
  },
  badgeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: verticalScale(6),
    ...paddingScale(4, 8),
  },
});

export default addYourselfSlideStyles;
