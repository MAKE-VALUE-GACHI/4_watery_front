import {
  getButtonBg,
  getButtonBorderColor,
  getTextColor,
} from "@/components/CustomButton/CustomButton.hooks";
import { customButtonStyles } from "@/components/CustomButton/CustomButton.styles";
import { BN2 } from "@/components/ThemedText";
import { textComponentMap } from "@/constants/textComponent";
import { TextType } from "@/types/text";
import React, { useState } from "react";
import { TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "tertiary" | "warning";
  disabled?: boolean;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  textType?: TextType;
  backgroundColor?: string;
}

/**
 * CustomButton
 *
 * 다양한 프리셋(variant) 또는 커스텀 배경색을 지원하는 커스텀 버튼 컴포넌트입니다.
 * - StyleSheet.create로 스타일링됩니다.
 * - 아이콘, 텍스트 스타일, 텍스트 타입(타이포그래피) 지정이 가능합니다.
 * - `backgroundColor`를 지정하면 variant보다 우선 적용됩니다.
 * - 눌림(pressed) 상태에 따라 시각적 피드백을 제공합니다.
 *
 * @component
 * @param {string} title - 버튼에 표시될 텍스트
 * @param {"primary" | "secondary" | "tertiary" | "warning"} [variant="primary"] - 버튼 색상 프리셋
 * @param {boolean} [disabled] - 비활성화 여부
 * @param {TextStyle} [textStyle] - 텍스트에 적용할 추가 스타일
 * @param {React.ReactNode} [icon] - 버튼에 표시할 아이콘
 * @param {TextType} [textType="BN2"] - 텍스트 타이포그래피 스타일
 * @param {string} [backgroundColor] - 커스텀 배경색 (지정 시 variant 무시)
 * @param {TouchableOpacityProps} [props] - 추가 TouchableOpacity 속성
 * @returns {JSX.Element}
 */
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

  const borderColor = getButtonBorderColor(variant, pressed);
  const bgColor = backgroundColor ? backgroundColor : getButtonBg(variant, pressed);
  const buttonOpacity = disabled ? 0.4 : 1;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        customButtonStyles.styledButton,
        { borderColor, backgroundColor: bgColor, opacity: buttonOpacity },
        style,
      ]}
      activeOpacity={1}
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
    </TouchableOpacity>
  );
};

export default CustomButton;
