import { getTextColor } from "@/components/CustomButton/CustomButton.hooks";
import { StyledButton } from "@/components/CustomButton/CustomButton.styles";
import { BN2 } from "@/components/ThemedText";
import { textComponentMap } from "@/constants/textComponent";
import { TextType } from "@/types/text";
import React, { useState } from "react";
import { TextStyle, TouchableOpacityProps } from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "tertiary" | "warning";
  disabled?: boolean;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  textType?: TextType;
  backgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = "primary",
  disabled,
  style,
  textStyle,
  icon,
  textType = "BN2",
  backgroundColor,
  ...props
}) => {
  const TextComponent = textComponentMap[textType] || BN2;
  const [pressed, setPressed] = useState(false);

  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      style={style}
      pressed={pressed}
      activeOpacity={1}
      customBgColor={backgroundColor}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...props}
    >
      {icon ?? icon}
      <TextComponent
        style={textStyle}
        lightColor={getTextColor(variant)}
        darkColor={getTextColor(variant)}
      >
        {title}
      </TextComponent>
    </StyledButton>
  );
};

export default CustomButton;
