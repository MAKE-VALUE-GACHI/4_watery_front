import { commonStyles } from "@/components/common.styles";
import { StyleSheet } from "react-native";
import { verticalScale } from "@/libs/utils/scaling";

export const tabsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...commonStyles.pageContainer,
    ...commonStyles.transparentView,
  },
  carouselWrapper: {
    marginTop: verticalScale(14),
  },
});

export default tabsStyles;
