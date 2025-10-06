import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Index() {

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="auto" />
      <ScrollView className="flex-1">
        <View className="flex-1 w-full justify-center">
          <Button variant={"default"}>
            <Text>Click me</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
