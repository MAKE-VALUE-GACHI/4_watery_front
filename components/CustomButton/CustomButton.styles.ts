import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const customButtonStyles = StyleSheet.create({
  StyledButton: {
    height: verticalScale(56),
    ...paddingScale(12, 30),
    borderRadius: verticalScale(12),
    borderWidth: 1,
    flexDirection: "row",
    gap: verticalScale(8),
    alignItems: "center",
    justifyContent: "center",
  },
});
