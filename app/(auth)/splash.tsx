import { View, Text, StyleSheet, Button } from "react-native";
import { horizontalScale, verticalScale, moderateScale, scaleFont } from "@/libs/utils/scaling";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const onLoginSuccess = () => {
    router.replace("/(tabs)"); // Splash → 메인으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watery 앱 시작</Text>
      <Button title="Press Me" onPress={onLoginSuccess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(40),
  },
  title: {
    fontSize: scaleFont(24),
    fontWeight: "bold",
  },
});
