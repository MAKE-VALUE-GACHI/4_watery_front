import styled from "styled-components/native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { BN1 } from "@/components/ThemedText";

export const AboveThumbContainer = styled(ThemedView)`
  position: absolute;
  top: -10px;
  left: -32px;
  min-width: 64px;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: ${Colors.primary_050};
`;

export const AboveThumbText = styled(BN1)`
  color: ${Colors.primary_900};
  font-weight: bold;
`;
