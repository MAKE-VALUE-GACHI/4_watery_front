import { Redirect } from "expo-router";
import { LogBox } from "react-native";

// LogBox로도 안 잡히는 경고를 콘솔 오버라이드로 무시
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args[0];
  if (
    typeof message === "string" &&
    (message.includes("Expected style") || message.includes("to contain units"))
  ) {
    return;
  }
  originalWarn(...args);
};

LogBox.ignoreLogs(["Expected style", "to contain units"]);

export default function Index() {
  // TODO: revert to /splash
  return <Redirect href="/(tabs)" />;
}
