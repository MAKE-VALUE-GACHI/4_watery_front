import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import styled from "styled-components/native";

export const ProgressBarWrapper = styled(ThemedView)`
  flex-direction: row;
  padding: 0 20px;
  gap: 8px;
  margin-bottom: 34px;
`;

export const ProgressBar = styled(ThemedView)<{ isActive: boolean }>`
  height: 5px;
  border-radius: 7px;
  flex: 1;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? Colors.primary_800 : Colors.primary_050};
`;

export default ProgressBar;
