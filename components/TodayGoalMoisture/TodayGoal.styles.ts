import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 16,
    padding: 1,
    width: 343,
    height: 102,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  cardBackground: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.48)",
    borderRadius: 16,
    paddingHorizontal: 12, // 좌우 간격 12
    paddingTop: 14,
    paddingBottom: 12, // 하단 여백 12
  },
  topRow: {
    width: "100%",
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressWrapper: {
    alignItems: "center", // 가운데 정렬
  },
  progressGradientBorder: {
    width: 319,
    height: 42,
    borderRadius: 8,
    padding: 1,
  },
  progressInner: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: Colors.primary_400,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  progressContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // 가운데 정렬
    gap: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    color: Colors.neutral_600,
    letterSpacing: 0.09,
  },
  settingButton: {
    backgroundColor: Colors.primary_010,
    borderColor: Colors.neutral_000,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    height: 28,
    width: 71,
    justifyContent: "center",
  },
  settingContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.primary_700,
    lineHeight: 16,
    letterSpacing: 0.3,
    marginRight: 4,
  },
  icon: {
    width: 16,
    height: 16,
  },

  // Progress Section
  progressContainer: {
    marginTop: 10,
    borderRadius: 8,
    borderColor: Colors.neutral_000,
    borderWidth: 1,
    width: 319,
    height: 42,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  crownIcon: {
    marginRight: 6,
  },
  progressText: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.neutral_000,
    lineHeight: 18,
    letterSpacing: 0.25,
    flex: 1,
  },
  statusGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  currentAmount: {
    fontSize: 15,
    fontWeight: "700",
    color: "#33363D", // Colors.neutral_800
    lineHeight: 22,
    width: 40,
    textAlign: "right",
    letterSpacing: 0.14,
  },
  slash: {
    fontSize: 15,
    fontWeight: "500",
    color: "#CDD1D5", // Colors.neutral_200
    lineHeight: 22,
    width: 6,
    textAlign: "center",
    letterSpacing: 0.14,
  },
  goalAmount: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.neutral_700,
    lineHeight: 22,
    width: 37,
    textAlign: "center",
    letterSpacing: 0.14,
  },
  ml: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.neutral_600,
    lineHeight: 18,
    width: 15,
    textAlign: "right",
    letterSpacing: 0.26,
    marginLeft: 2,
  },
});

export default styles;
