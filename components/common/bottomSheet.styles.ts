import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/libs/utils/scaling";

const bottomSheetStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: horizontalScale(12),
    right: horizontalScale(12),
    bottom: verticalScale(24),
    alignItems: "center",
  },
  borderWrapper: {
    borderRadius: horizontalScale(32),
    padding: 1, // border 두께
    width: "100%",
  },
  contentWrapper: {
    borderRadius: horizontalScale(32),
    overflow: "hidden",
    width: "100%",
  },
  innerContent: {
    borderRadius: horizontalScale(32),
    paddingHorizontal: horizontalScale(32),
    paddingVertical: verticalScale(20),
    backgroundColor: "transparent",
  },
});

export default bottomSheetStyles;
