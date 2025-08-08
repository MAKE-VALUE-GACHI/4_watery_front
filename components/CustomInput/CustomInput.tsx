import { customInputStyles } from "@/components/CustomInput/CustomInput.styles";
import { L2, LN1 } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

export interface CustomInputProps extends TextInputProps {
  label?: string;
  errorText?: string;
  isError?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

/**
 * CustomInput
 *
 * 프로젝트의 디자인 시스템에 맞는 커스텀 Input 컴포넌트입니다.
 * - Label, ErrorText를 포함한 완전한 폼 필드 컴포넌트
 * - react-hook-form과의 통합을 고려한 설계
 * - 다양한 variant와 상태를 지원
 *
 * @component
 * @param {string} [label] - Input 위에 표시될 라벨
 * @param {string} [errorText] - 에러 상태일 때 표시될 메시지
 * @param {boolean} [isError=false] - 에러 상태 여부
 * @param {React.ReactNode} [rightIcon] - 오른쪽에 표시할 아이콘
 * @param {React.ReactNode} [leftIcon] - 왼쪽에 표시할 아이콘
 * @param {TextInputProps} [...props] - 추가 TextInput 속성
 * @returns {JSX.Element}
 */
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  errorText,
  isError = false,
  rightIcon,
  leftIcon,
  style,
  editable = true,
  ...props
}) => {
  return (
    <View style={customInputStyles.container}>
      {label && (
        <LN1 style={customInputStyles.label} lightColor={Colors.neutral_700}>
          {label}
        </LN1>
      )}

      <View style={customInputStyles.inputWrapper}>
        {leftIcon && <View style={customInputStyles.leftIconContainer}>{leftIcon}</View>}

        <TextInput
          style={[
            customInputStyles.input,
            isError ? customInputStyles.inputError : null,
            leftIcon ? customInputStyles.inputWithLeftIcon : null,
            rightIcon ? customInputStyles.inputWithRightIcon : null,
            style,
          ]}
          editable={editable}
          placeholderTextColor={Colors.neutral_400}
          {...props}
        />

        {rightIcon && <View style={customInputStyles.rightIconContainer}>{rightIcon}</View>}
      </View>

      {errorText && isError && (
        <L2 style={customInputStyles.errorText} lightColor={Colors.danger_200}>
          {errorText}
        </L2>
      )}
    </View>
  );
};

export default CustomInput;
