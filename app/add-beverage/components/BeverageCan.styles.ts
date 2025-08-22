import { Colors } from "@/constants/Colors";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

const beverageCanStyles = StyleSheet.create({
  addBeverageBgSetting: {
    width: 395,
    height: 382,
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(48),
    paddingLeft: horizontalScale(32),
    paddingRight: horizontalScale(32),
    backgroundColor: Colors.neutral_050,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  beverageName: {
    width: 311,
    height: 24,
    fontWeight: "700",
    marginHorizontal: 32,
    marginBottom: verticalScale(26),
  },
  styledLinearGradient: {
    borderRadius: verticalScale(24),
    height: verticalScale(436),
    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
  },
  slideContainer: {
    flex: 1,
    borderWidth: horizontalScale(1),
    borderColor: Colors.neutral_000,
    borderRadius: verticalScale(24),
    margin: verticalScale(1),
    ...paddingScale(12),
  },
  slideBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  iconWrapper: {
    borderRadius: horizontalScale(1),
    borderWidth: horizontalScale(1),
    borderColor: Colors.neutral_000,
    backgroundColor: "transparent",
  },
});

export default beverageCanStyles;
