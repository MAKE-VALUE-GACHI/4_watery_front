import { Colors } from "@/constants/Colors";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";

export const customInputStyles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(4),
  },
  label: {
    fontWeight: "bold",
    marginBottom: verticalScale(8),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    height: verticalScale(48),
    ...paddingScale(12, 16),
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.0912,
    borderRadius: verticalScale(12),
    borderWidth: 1,
    borderColor: Colors.neutral_200,
    backgroundColor: Colors.neutral_000,
  },
  
  inputError: {
    borderColor: Colors.danger_200,
    backgroundColor: Colors.danger_100 + "10", // 10% opacity
  },
  
  inputFocused: {
    borderColor: Colors.primary_500,
    borderWidth: 2,
  },
  // Icon containers
  leftIconContainer: {
    position: "absolute",
    left: horizontalScale(12),
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightIconContainer: {
    position: "absolute",
    right: horizontalScale(12),
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWithLeftIcon: {
    paddingLeft: horizontalScale(44),
  },
  inputWithRightIcon: {
    paddingRight: horizontalScale(44),
  },
  errorText: {
    marginTop: verticalScale(4),
  },
});
