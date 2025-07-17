import styled from "styled-components/native";
import { ThemedView } from "@/components/ThemedView";

export const TransparentView = styled(ThemedView)`
  background-color: transparent;
`;

export const TransparentFlexRow = styled(TransparentView)<{ gap?: number }>`
  flex-direction: row;
  ${({ gap }: { gap: number }) => gap && `gap: ${gap}px;`}
`;

export const FlexRow = styled(ThemedView)<{ gap?: number }>`
  flex-direction: row;
  ${({ gap }: { gap: number }) => gap && `gap: ${gap}px;`}
`;
