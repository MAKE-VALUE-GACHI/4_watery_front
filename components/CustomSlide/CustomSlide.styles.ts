import styled from "styled-components/native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

//  TODO: work on Linear gradient (check cursor)
export const SlideContainer = styled(ThemedView)`
  border-color: ${Colors.neutral_000};
  border-radius: 24px;
  border-width: 1px;
  //background: linear-gradient(180deg, rgba(255, 255, 255, 0.48) 0%, rgba(145, 207, 234, 0.23) 100%);
  //box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.1);
`;

export const FlexRow = styled(ThemedView)<{ gap?: number }>`
  flex-direction: row;
  ${(gap: number) => gap && `gap: ${gap}px;`}
`;

export const SlideHeader = styled(FlexRow)`
  justify-content: space-between;
`;

export const SlideBody = styled(ThemedView)`
  height: 436px;
`;
