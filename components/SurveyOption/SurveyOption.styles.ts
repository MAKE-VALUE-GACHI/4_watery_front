import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";
import { Pressable } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export const SurveyOptionWrapper = styled(Pressable)`
  width: 100%;
  padding: 18px 16px;
  border: solid 1px ${Colors.primary_100};
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 81px;
`;

export const SurveyTextWrapper = styled(ThemedView)<{ hasDescription: boolean }>`
  background-color: transparent;
  gap: 6px;
  flex: 1;
  align-items: ${(props: { hasDescription: boolean }) =>
    props.hasDescription ? "flex-start" : "center"};
`;
