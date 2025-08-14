import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { C1 } from "@/components/ThemedText";
import CustomMoveButtonStyle from "@/components/CustomButton/CustomButtonMove.styles";

interface SettingButtonProps {
  label: string;
  onPress?: () => void;
}

export default function CustomButtonMove({ label, onPress }: SettingButtonProps) {
  return (
    <TouchableOpacity style={CustomMoveButtonStyle.button} onPress={onPress}>
      <View style={CustomMoveButtonStyle.content}>
        <C1 style={CustomMoveButtonStyle.text}>{label}</C1>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={16}
          color={Colors.primary_300}
          style={CustomMoveButtonStyle.icon}
        />
      </View>
    </TouchableOpacity>
  );
}
