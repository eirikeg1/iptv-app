import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Index() {

  return (
    <View className="flex-1 bg-background h-full">
      <StatusBar style="auto" />
      <ScrollView className="h-full w-full">
        <View className="flex flex-col justify-center items-center h-full w-full">
          <Button variant={"default"}>
            <Text>Click me</Text>
          </Button>
          <Button variant={"default"}>
            <Text>Do not click me</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
