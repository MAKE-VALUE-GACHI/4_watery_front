import { TextInputProps } from "react-native";

export interface CustomInputProps extends TextInputProps {
  label?: string;
  errorText?: string;
  errorCondition?: (value: string) => boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export interface UseCustomInputProps {
  name: string;
  rules?: any;
  defaultValue?: any;
}
