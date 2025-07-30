import React, { ComponentProps } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { commonHeaderStyles } from "@/components/CommonHeader/CommonHeader.styles";
import { useRouter } from "expo-router";

interface CommonHeaderProps {
  iconName?: ComponentProps<typeof MaterialIcons>["name"];
  onPressIcon?: () => void;
  isEmpty?: boolean;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ iconName, onPressIcon, isEmpty = false }) => {
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
          <TouchableOpacity onPress={onPressIcon ?? goBack}>
            <MaterialIcons name={iconName ?? "arrow-back"} size={24} color={Colors.neutral_400} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CommonHeader;
