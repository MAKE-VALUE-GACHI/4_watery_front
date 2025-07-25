import { StyleSheet } from "react-native";
import { commonStyles } from "@/components/common.styles";

export const tabsStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    ...commonStyles.transparentView,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    ...commonStyles.transparentView,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export default tabsStyles;
