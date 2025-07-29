import { BeverageVariantType } from "@/components/CustomSlide/CustomSlide.types";
import { BeverageType } from "@/types/beverages";
import { Colors } from "@/constants/Colors";

const beverageDataSet: (BeverageVariantType | "addYourself")[] = [
  "water",
  "coffee",
  "greenTea",
  "cola",
  "addYourself",
];

export let dummyBeverages: BeverageType[] = [
  {
    id: 1,
    name: "물",
    totalAmount: 2000,
    includesDailyHydrationGoal: true,
    colorTemplate: {
      colorTemplateId: 1,
      colors: [Colors.waves.water[0], Colors.waves.water[1], Colors.waves.water[2]],
    },
  },
  {
    id: 2,
    name: "커피",
    totalAmount: 500,
    includesDailyHydrationGoal: true,
    colorTemplate: {
      colorTemplateId: 2,
      colors: [Colors.waves.coffee[0], Colors.waves.coffee[1], Colors.waves.coffee[2]],
    },
  },
  {
    id: 3,
    name: "녹차",
    totalAmount: 0,
    includesDailyHydrationGoal: true,
    colorTemplate: {
      colorTemplateId: 3,
      colors: [Colors.waves.green_tea[0], Colors.waves.green_tea[1], Colors.waves.green_tea[2]],
    },
  },
  {
    id: 4,
    name: "콜라",
    totalAmount: 315,
    includesDailyHydrationGoal: true,
    colorTemplate: {
      colorTemplateId: 4,
      colors: [Colors.waves.cola[0], Colors.waves.cola[1], Colors.waves.cola[2]],
    },
  },
];
export default beverageDataSet;
