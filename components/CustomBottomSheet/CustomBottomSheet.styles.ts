import { Dimensions, StyleSheet } from "react-native";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";

const { width: screenWidth } = Dimensions.get("window");

export const customBottomSheetStyles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  sheet: {
    backgroundColor: "white",
    borderTopLeftRadius: verticalScale(24),
    borderTopRightRadius: verticalScale(24),
    minHeight: verticalScale(330),
    width: screenWidth,
    ...paddingScale(16, 32),
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#ccc",
    marginBottom: 12,
  },
});
