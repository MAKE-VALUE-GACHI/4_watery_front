import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import addYourselfSlideStyles from "@/app/(tabs)/components/AddYourselfSlide.styles";
import { L2, LN1, T3 } from "@/components/ThemedText";
import { commonStyles } from "@/components/common.styles";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { horizontalScale } from "@/libs/utils/scaling";

interface AddYourselfSlideProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const AddYourselfSlide: React.FC<AddYourselfSlideProps> = ({ style, onPress }) => {
  return (
    <TouchableOpacity style={[addYourselfSlideStyles.slideContainer, style]} onPress={onPress}>
      <View>
        <View style={commonStyles.flexRow}>
          <T3>직접 추가</T3>
          <T3 lightColor={Colors.neutral_500}>하는</T3>
        </View>
        <T3 lightColor={Colors.neutral_500}>자주 마시는 음료</T3>
      </View>

      <View style={addYourselfSlideStyles.slideBody}>
        <View style={addYourselfSlideStyles.iconWrapper}>
          <MaterialIcons name={"add"} color={Colors.neutral_000} size={horizontalScale(32)} />
        </View>
      </View>

      <View style={addYourselfSlideStyles.badgesRow}>
        {/*  TODO: replace with CustomBadge component*/}
        <Badge content={"커피"} badgeColor={"#8C715F"} />
        <Badge content={"녹차"} badgeColor={"#6B8E23"} />
        <Badge content={"콜라"} badgeColor={"#4D4D4D"} />
        <LN1 lightColor={Colors.neutral_600}>or</LN1>
        <Badge
          content={"직접 추가"}
          badgeColor={Colors.neutral_400}
          maxWidth={horizontalScale(62)}
        />
      </View>
    </TouchableOpacity>
  );
};

const Badge = ({
  content,
  badgeColor,
  maxWidth,
}: {
  content: string;
  badgeColor: string;
  maxWidth?: number;
}) => {
  return (
    <View
      style={{
        ...addYourselfSlideStyles.badgeWrapper,
        maxWidth: horizontalScale(maxWidth ?? 40),
        backgroundColor: badgeColor,
      }}
    >
      <L2 lightColor={Colors.neutral_000} style={{ fontWeight: "500" }}>
        {content}
      </L2>
    </View>
  );
};

export default AddYourselfSlide;
