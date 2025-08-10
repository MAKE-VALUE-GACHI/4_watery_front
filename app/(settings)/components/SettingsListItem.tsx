import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { BN1 } from "@/components/ThemedText";
import settingsListItemStyles from "@/app/(settings)/components/SettingsListItem.styles";
import { useRouter } from "expo-router";

interface SettingsListItemProps {
  title: string;
  route?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const SettingsListItem: React.FC<SettingsListItemProps> = ({
  title,
  route,
  leftIcon,
  rightIcon,
}) => {
  const router = useRouter();

  const handlePress = (route: string) => {
    router.push(route as any);
  };

  return (
    <TouchableOpacity
      style={settingsListItemStyles.settingItem}
      onPress={() => handlePress(route ?? "/(settings)")}
    >
      <View style={settingsListItemStyles.iconContainer}>{leftIcon}</View>

      <View style={settingsListItemStyles.textContainer}>
        <BN1 style={settingsListItemStyles.title}>{title}</BN1>
      </View>

      {rightIcon ? (
        rightIcon
      ) : (
        <MaterialIcons name="chevron-right" size={24} color={Colors.neutral_400} />
      )}
    </TouchableOpacity>
  );
};

export default SettingsListItem;
