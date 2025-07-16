import styled from "styled-components/native";
import { Colors } from "@/constants/Colors";
import { Pressable } from "react-native";

export const SurveyOptionWrapper = styled(Pressable)`
  width: 100%;
  padding: 29px 0;
  border: solid 1px ${Colors.primary_100};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
