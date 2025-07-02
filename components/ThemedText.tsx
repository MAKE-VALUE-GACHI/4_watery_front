import React from "react";
import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { presetStyles } from "@/components/styles/TextPresets";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <Text style={[{ color }, style]} {...rest} />;
}

export const T1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.T1, props.style]} />
);

export const T2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.T2, props.style]} />
);

export const T3 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.T3, props.style]} />
);

export const H1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.H1, props.style]} />
);

export const H2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.H2, props.style]} />
);

export const HL1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.HL1, props.style]} />
);

export const HL2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.HL2, props.style]} />
);

export const BN1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.BN1, props.style]} />
);

export const BR1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.BR1, props.style]} />
);

export const BN2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.BN2, props.style]} />
);

export const BR2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.BR2, props.style]} />
);

export const LN1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.LN1, props.style]} />
);

export const LR1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.LR1, props.style]} />
);

export const L2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.L2, props.style]} />
);

export const C1 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.C1, props.style]} />
);

export const C2 = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[presetStyles.C2, props.style]} />
);
