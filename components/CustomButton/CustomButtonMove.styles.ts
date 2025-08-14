import { StyleSheet } from "react-native";
import { paddingScale, verticalScale } from "@/libs/utils/scaling";
import { commonStyles } from "@/components/common.styles";
import { Colors } from "@/constants/Colors";

export const CustomMoveButtonStyle = StyleSheet.create({
  button: {
    ...commonStyles.flexRow,
    ...paddingScale(6, 4, 6, 8),
    backgroundColor: Colors.primary_010,
    borderColor: Colors.neutral_000,
    borderWidth: verticalScale(1),
    borderRadius: verticalScale(6),
    alignSelf: "flex-start", // 크기 자동 조절
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    color: Colors.primary_700,
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export default CustomMoveButtonStyle;
