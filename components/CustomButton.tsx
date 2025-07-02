import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "tertiary" | "warning";
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// TODO: 스타일링 라이브러리에 따라 스타일 적용
const variantStyles = {
  primary: {
    backgroundColor: Colors.primary_600,
    color: Colors.neutral_000,
  },
  secondary: {
    backgroundColor: Colors.primary_010,
    color: Colors.primary_700,
  },
  tertiary: {
    backgroundColor: Colors.neutral_100,
    color: Colors.neutral_600,
  },
  warning: {
    backgroundColor: Colors.danger_200,
    color: Colors.neutral_000,
  },
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = "primary",
  disabled,
  style,
  textStyle,
  ...props
}) => {
  const { backgroundColor, color } = variantStyles[variant];
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={[styles.button, { backgroundColor: backgroundColor }, style]}
      {...props}
    >
      <Text style={[styles.text, { color }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
