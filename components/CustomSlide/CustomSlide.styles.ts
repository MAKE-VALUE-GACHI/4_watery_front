import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const TransparentView = styled(ThemedView)`
  background-color: transparent;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  border-radius: 24px;
`;

export const SlideContainer = styled(TransparentView)`
  border-radius: 24px;
  border-width: 1px;
  border-color: ${Colors.neutral_000};
  background-color: transparent;
  margin: 1px;
  padding: 12px;
`;

export const FlexRow = styled(TransparentView)<{ gap?: number }>`
  flex-direction: row;
  ${({ gap }: { gap: number }) => gap && `gap: ${gap}px;`}
`;

export const SlideBody = styled(TransparentView)`
  height: 436px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const IconWrapper = styled(ThemedView)`
  border-radius: 100%;
  border-width: 2px;
  border-color: ${Colors.neutral_000};
  background-color: transparent;
`;
