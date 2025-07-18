import { ThemedView } from "@/components/ThemedView";
import styled from "styled-components/native";

interface FlexRowProps {
  gap?: number;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const TransparentView = styled(ThemedView)`
  background-color: transparent;
`;

export const TransparentFlexRow = styled(TransparentView)<{ gap?: number }>`
  flex-direction: row;
  ${({ gap }: { gap: number }) => gap && `gap: ${gap}px;`}
`;

export const FlexRow = styled(ThemedView)<FlexRowProps>`
  flex-direction: row;
  align-items: ${({ alignItems }: { alignItems: FlexRowProps["alignItems"] }) =>
    alignItems || "flex-start"};
  justify-content: ${({ justifyContent }: { justifyContent: FlexRowProps["justifyContent"] }) =>
    justifyContent || "flex-start"};
  ${({ gap }: { gap: number }) => gap && `gap: ${gap}px;`}
`;
