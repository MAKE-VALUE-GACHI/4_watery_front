import { getButtonBg, getButtonBorderColor } from "@/components/CustomButton/CustomButton.hooks";
import styled from "styled-components/native";

interface StyledButtonProps {
  variant: string;
  pressed: boolean;
  disabled?: boolean;
  customBgColor?: string;
}

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  height: 56px;
  padding: 12px 30px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ variant, pressed }: StyledButtonProps) => getButtonBorderColor(variant, pressed)};
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }: StyledButtonProps) => (disabled ? 0.4 : 1)};
  background-color: ${({ customBgColor, variant, pressed }: StyledButtonProps) =>
    customBgColor ? customBgColor : getButtonBg(variant, pressed)};
`;
