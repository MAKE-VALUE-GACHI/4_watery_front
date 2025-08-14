import { useRouter } from "expo-router";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function HeaderWithBack({ title }: { title?: string }) {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={router.back}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  back: { fontSize: 24, marginRight: 16 },
  title: { fontSize: 18, fontWeight: "bold" },
});
