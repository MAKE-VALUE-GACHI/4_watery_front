import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";
import { paddingScale, horizontalScale, verticalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

const progressbarStyles = StyleSheet.create({
  container: {
    ...commonStyles.flexRow,
    width: horizontalScale(319),
    height: verticalScale(42),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral_000,
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
  },
  fill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
  },
  content: {
    ...commonStyles.flexRow,
    alignItems: "center",
    zIndex: 1,
    paddingHorizontal: horizontalScale(8),
    flex: 1,
  },
  icon: {
    width: horizontalScale(16),
    height: verticalScale(16),
    marginRight: horizontalScale(6),
  },
  textEmpty: {
    width: horizontalScale(131),
    color: Colors.primary_700,
    fontWeight: "500",
  },
  textGoal: {
    width: horizontalScale(131),
    color: Colors.neutral_000,
    fontWeight: "700",
  },
  amount: {
    width: horizontalScale(40),
    color: Colors.neutral_800,
    fontWeight: "700",
    textAlign: "right",
  },
  slash: {
    width: horizontalScale(6),
    color: Colors.neutral_200,
    fontWeight: "500",
    marginLeft: horizontalScale(4),
    marginRight: horizontalScale(4),
  },
  goal: {
    width: horizontalScale(37),
    color: Colors.neutral_700,
    fontWeight: "500",
  },
  unit: {
    width: horizontalScale(15),
    color: Colors.neutral_600,
    fontWeight: "500",
    textAlign: "right",
  },
});

export default progressbarStyles;
