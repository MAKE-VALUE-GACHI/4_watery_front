import { commonStyles } from "@/components/common.styles";
import { StyleSheet } from "react-native";

export const tabsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...commonStyles.pageContainer,
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
