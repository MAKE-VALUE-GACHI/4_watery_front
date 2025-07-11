import { Colors } from "@/constants/Colors";

export const getButtonBg = (variant: string, pressed: boolean) => {
  switch (variant) {
    case "secondary":
      return !pressed ? Colors.primary_010 : Colors.primary_200;
    case "tertiary":
      return Colors.neutral_100;
    case "warning":
      return !pressed ? Colors.danger_200 : Colors.danger_300;
    case "primary":
      return !pressed ? Colors.primary_600 : Colors.primary_800;

    default:
      return Colors.primary_600;
  }
};

export const getButtonBorderColor = (variant: string, pressed: boolean) => {
  switch (variant) {
    case "secondary":
      return !pressed ? Colors.primary_100 : Colors.primary_200;
    case "tertiary":
      return Colors.neutral_100;
    case "warning":
      return !pressed ? Colors.neutral_100 : Colors.danger_100;
    case "primary":
      return !pressed ? Colors.neutral_000 : Colors.primary_200;

    default:
      return Colors.neutral_000;
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
      return Colors.neutral_000;

    default:
      return Colors.neutral_000;
  }
};
