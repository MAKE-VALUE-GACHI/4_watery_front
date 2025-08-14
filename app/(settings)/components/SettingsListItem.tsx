import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { BN2 } from "@/components/ThemedText";
import settingsListItemStyles from "@/app/(settings)/components/SettingsListItem.styles";
import { useRouter } from "expo-router";
import { verticalScale } from "@/libs/utils/scaling";

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
      {leftIcon && <View style={settingsListItemStyles.iconContainer}>{leftIcon}</View>}

      <View style={settingsListItemStyles.textContainer}>
        <BN2 style={settingsListItemStyles.title}>{title}</BN2>
      </View>

      {rightIcon ? (
        rightIcon
      ) : (
        <MaterialIcons name="chevron-right" size={verticalScale(24)} color={Colors.neutral_400} />
      )}
    </TouchableOpacity>
  );
};

export default SettingsListItem;
