import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { PortalHost } from '@rn-primitives/portal';
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#0f172a" : "#ffffff",
          },
          headerTintColor: colorScheme === "dark" ? "#f1f5f9" : "#0f172a",
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
      />
      <PortalHost />
    </>
  );
}
