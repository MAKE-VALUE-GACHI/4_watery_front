import { StyleSheet } from "react-native";
import { paddingScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";

const loginInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...paddingScale(16),
  },
  listItemWrapper: {
    ...paddingScale(12, 8, 12, 12),
    ...commonStyles.flexRow,
    justifyContent: "space-between",
  },
  listItemLabel: {
    fontWeight: "500",
  },
  unRegister: {
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default loginInfoStyles;
