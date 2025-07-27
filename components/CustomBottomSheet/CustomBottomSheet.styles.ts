import { StyleSheet } from "react-native";

export const customBottomSheetStyles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  sheet: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 120,
    paddingBottom: 24,
    paddingTop: 12,
  },
});
