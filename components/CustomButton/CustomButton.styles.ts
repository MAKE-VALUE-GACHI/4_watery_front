import { getButtonBg } from "@/components/CustomButton/CustomButton.hooks";
import styled from "styled-components/native";

interface StyledButtonProps {
  variant: string;
  disabled?: boolean;
  customBgColor?: string;
}

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  padding: 12px 30px;
  border-radius: 12px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: StyledButtonProps) =>
    props.customBgColor ? props.customBgColor : getButtonBg(props.variant, props.disabled)};
`;
