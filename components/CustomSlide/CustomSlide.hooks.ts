import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import { Colors } from "@/constants/Colors";

export const getButtonBgColor = (beverage: BeverageVariantType) => {
  switch (beverage) {
    case "water":
      return Colors.waves.water[0];

    case "coffee":
      return Colors.waves.coffee[0];

    case "greenTea":
      return Colors.waves.green_tea[0];

    case "cola":
      return Colors.waves.cola[0];

    default:
      return Colors.waves.water[0];
  }
};
