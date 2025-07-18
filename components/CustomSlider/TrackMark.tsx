import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import styled from "styled-components/native";

interface TrackMarkProps {
  value: number;
}

const StyledThemedView = styled(ThemedView)`
  background-color: transparent;
  height: 80px;
  justify-content: flex-end;
`;

const TrackMark: React.FC<TrackMarkProps> = ({ value }) => {
  return (
    <StyledThemedView>
      <ThemedText style={{ color: Colors.neutral_400 }}>{value}</ThemedText>
    </StyledThemedView>
  );
};

export default TrackMark;
