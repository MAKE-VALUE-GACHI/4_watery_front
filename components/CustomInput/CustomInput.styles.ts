import { Colors } from "@/constants/Colors";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";
import { StyleSheet } from "react-native";
import { presetStyles } from "@/components/styles/TextPresets";

export const customInputStyles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(4),
  },
  label: {
    fontWeight: "bold",
    marginBottom: verticalScale(8),
    marginLeft: horizontalScale(8),
  },

  // input
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    ...paddingScale(16),
    ...presetStyles.BN2,
    borderWidth: 1,
    borderRadius: verticalScale(12),
    borderColor: Colors.neutral_200,
    backgroundColor: Colors.neutral_000,
  },
  inputError: {
    borderColor: Colors.danger_200,
    backgroundColor: Colors.danger_100 + "10",
  },
  inputFocused: {
    borderColor: Colors.primary_500,
    borderWidth: 1,
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

  // Text
  errorText: {
    marginTop: verticalScale(8),
    marginLeft: horizontalScale(8),
  },
  detailText: {
    marginTop: verticalScale(8),
    marginLeft: horizontalScale(8),
  },
});
