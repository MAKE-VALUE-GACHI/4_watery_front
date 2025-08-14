import { StyleSheet } from "react-native";
import { paddingScale } from "@/libs/utils/scaling";

const settingsListItemStyles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    ...paddingScale(12, 4, 12, 12),
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "500",
  },
});

export default settingsListItemStyles;
