import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function AddBeveragePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>새로운 음료 추가하기</Text>

      {/* 나중에: 입력 폼 등 구현 */}

      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>뒤로가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 24 },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4682B4",
    borderRadius: 8,
  },
  buttonText: { color: "white", fontSize: 16 },
});
