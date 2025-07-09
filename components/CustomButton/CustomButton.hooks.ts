import { Colors } from "@/constants/Colors";

export const getButtonBg = (variant: string, disabled?: boolean) => {
  if (disabled) return "#ccc";
  switch (variant) {
    case "secondary":
      return Colors.primary_010;
    case "tertiary":
      return Colors.neutral_100;
    case "warning":
      return Colors.danger_200;
    case "primary":
    default:
      return Colors.primary_600;
  }
};

export const getTextColor = (variant: string) => {
  switch (variant) {
    case "secondary":
      return Colors.primary_700;
    case "tertiary":
      return Colors.neutral_600;
    case "warning":
      return Colors.neutral_000;
    case "primary":
    default:
      return Colors.neutral_000;
  }
};
