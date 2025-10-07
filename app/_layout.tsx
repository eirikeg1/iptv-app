import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { PortalHost } from '@rn-primitives/portal';
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { NavigationBar } from "@/components/navigation/NavigationBar";

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
      >
        <Stack.Screen
          name="index" // This targets your app/index.tsx file
          options={{
            title: "Home", // This sets the header title
          }}
        />
      </Stack>
      <PortalHost />
    </>
  );
}
