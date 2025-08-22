/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  neutral_000: "#FFFFFF",
  neutral_050: "#F4F5F6",
  neutral_100: "#E6E8EA",
  neutral_200: "#CDD1D5",
  neutral_300: "#B1B8BE",
  neutral_400: "#8A949E",
  neutral_500: "#6D7882",
  neutral_600: "#58616A",
  neutral_700: "#464C53",
  neutral_800: "#33363D",
  neutral_900: "#1E2124",
  neutral_950: "#131416",
  neutral_1000: "#000000",
  primary_010: "#F6F9FE",
  primary_050: "#D3EEF6",
  primary_100: "#B2E0EE",
  primary_200: "#89CDED",
  primary_300: "#5FB9EA",
  primary_400: "#3FAAE9",
  primary_500: "#1F9BE7",
  primary_600: "#1C8EDA",
  primary_700: "#187DC7",
  primary_800: "#146DB6",
  primary_900: "#0C5099",
  danger_100: "#F48771",
  danger_200: "#DE3412",
  danger_300: "#8A240F",
  success_100: "#7EC88E",
  success_200: "#228738",
  success_300: "#285D33",
  waves: {
    water: ["#2AA2D6", "#5EBAE2", "#91CFEA"],
    coffee: ["#4A2C17", "#6F4E37", "#8B6F47"],
    green_tea: ["#4A7C59", "#6B8E23", "#90EE90"],
    cola: ["#1A1A1A", "#333333", "#4D4D4D"],
    black_tea: ["#8B4513", "#A0522D", "#CD853F"],
    default: ["#CDD1D5", "#E6E8EA", "#FFFFFF"],
  },
  whiteTransparent: "rgba(255, 255, 255, 0.85)",
  primaryTransparent: "#91CFEA",
  primaryTransparent32: "#91CFEA52",
};
