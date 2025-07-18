import React from "react";
import { View, Pressable, Animated, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";

interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (val: boolean) => void;
  style?: ViewStyle;
}

export const CustomToggle = ({ value, onValueChange, style }: ToggleSwitchProps) => {
    const toggleBackgroundColor = value ? Colors.primary_600 : Colors.neutral_200;
    const togglePosition = value ? 26 : 2; // 52 - 24 - 2(padding*2) = 26 → 가운데 기준으로 20px 정도

    return (
        <Pressable
            onPress={() => onValueChange(!value)}
            style={[styles.switchBase, { backgroundColor: toggleBackgroundColor }, style]}
        >
            <Animated.View
                style={[
                    styles.toggle,
                    {
                        transform: [{ translateX: togglePosition }],
                    },
                ]}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    switchBase: {
        width: 52,
        height: 32,
        backgroundColor: Colors.neutral_200,
        borderRadius: 100,
        padding: 4,
        position: "relative",
        justifyContent: "center",
    },
    toggle: {
        position: "absolute",
        width: 24,
        height: 24,
        backgroundColor: Colors.neutral_000,
        borderRadius: 1000,
    },
});
