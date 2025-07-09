import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { TextStyle, TouchableOpacityProps } from "react-native";
import { getTextColor } from "@/components/CustomButton/CustomButton.hooks";
import { StyledButton } from "@/components/CustomButton/CustomButton.styles";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "tertiary" | "warning";
  disabled?: boolean;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = "primary",
  disabled,
  style,
  textStyle,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      style={style}
      activeOpacity={0.8}
      {...props}
    >
      <ThemedText
        style={textStyle}
        lightColor={getTextColor(variant)}
        darkColor={getTextColor(variant)}
      >
        {title}
      </ThemedText>
    </StyledButton>
  );
};

export default CustomButton;
