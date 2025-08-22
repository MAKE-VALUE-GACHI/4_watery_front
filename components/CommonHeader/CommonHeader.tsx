import React, { ComponentProps } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { commonHeaderStyles } from "@/components/CommonHeader/CommonHeader.styles";
import { useRouter } from "expo-router";
import { BN1 } from "@/components/ThemedText";
import { horizontalScale, paddingScale, verticalScale } from "@/libs/utils/scaling";

interface CommonHeaderProps {
  iconName?: ComponentProps<typeof MaterialIcons>["name"];
  onPressIcon?: () => void;
  isEmpty?: boolean;
  title?: string;
  hasIcon?: boolean;
  isComplete?: boolean;
  complete?: boolean;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  iconName,
  onPressIcon,
  isEmpty = false,
  title,
  hasIcon = true,
  isComplete = false,
  complete = false,
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {hasIcon && (
              <TouchableOpacity onPress={onPressIcon ?? goBack}>
                <MaterialIcons
                  name={iconName ?? "arrow-back"}
                  size={24}
                  color={Colors.neutral_400}
                />
              </TouchableOpacity>
            )}
            {title && (
              <BN1
                lightColor={Colors.neutral_800}
                style={{ fontWeight: "bold", marginLeft: horizontalScale(8) }}
              >
                {title}
              </BN1>
            )}
          </View>

          {isComplete && (
            <TouchableOpacity
              onPress={onPressIcon ?? goBack}
              style={commonHeaderStyles.completeText}
            >
              <BN1
                lightColor={complete ? Colors.primary_700 : Colors.neutral_300}
                style={{ fontWeight: "bold" }}
              >
                완료
              </BN1>
            </TouchableOpacity>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default CommonHeader;
