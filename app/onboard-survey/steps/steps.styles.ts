import styled from "styled-components/native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export const StepContainer = styled(ThemedView)`
  flex: 1;
  padding-top: 48px;
  align-items: center;
  gap: 16px;
`;

export const ActivityIconWrapper = styled(ThemedView)`
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.neutral_000};
`;

export default StepContainer;
