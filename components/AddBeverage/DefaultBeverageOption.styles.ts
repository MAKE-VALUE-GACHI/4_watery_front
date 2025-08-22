import styled from "styled-components/native";
import { verticalScale, horizontalScale } from "@/libs/utils/scaling";
import { Colors } from "@/constants/Colors";

export const OptionBase = styled.Pressable`
  flex: 1;
  height: ${verticalScale(44)}px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${verticalScale(4)}px ${horizontalScale(8)}px;
  border-color: ${Colors.neutral_100};
`;

export const OptionInner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  min-width: 0px;
`;

export const BeverageText = {
  fontWeight: "700" as const,
  textAlign: "center" as const,
};
