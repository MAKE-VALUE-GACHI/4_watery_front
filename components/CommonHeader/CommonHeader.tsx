import React, { ComponentProps } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { commonHeaderStyles } from "@/components/CommonHeader/CommonHeader.styles";
import { useRouter } from "expo-router";
import { BN1 } from "@/components/ThemedText";

interface CommonHeaderProps {
  iconName?: ComponentProps<typeof MaterialIcons>["name"];
  onPressIcon?: () => void;
  isEmpty?: boolean;
  title?: string;
  hasIcon?: boolean;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  iconName,
  onPressIcon,
  isEmpty = false,
  title,
  hasIcon = true,
}) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      {isEmpty ? (
        <View style={commonHeaderStyles.emptyHeader} />
      ) : (
        <View style={commonHeaderStyles.commonHeaderContainer}>
          {hasIcon && (
            <TouchableOpacity onPress={onPressIcon ?? goBack}>
              <MaterialIcons name={iconName ?? "arrow-back"} size={24} color={Colors.neutral_400} />
            </TouchableOpacity>
          )}
          {title && (
            <BN1 lightColor={Colors.neutral_800} style={{ fontWeight: "bold" }}>
              {title}
            </BN1>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default CommonHeader;
