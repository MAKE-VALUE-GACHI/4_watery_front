import styled from "styled-components/native";
import { getButtonBg } from "@/components/CustomButton/CustomButton.hooks";

export const StyledButton = styled.TouchableOpacity<{ variant: string; disabled?: boolean }>`
  padding: 12px 30px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant, disabled }: { variant: string; disabled?: boolean }) =>
    getButtonBg(variant, disabled)};
`;
