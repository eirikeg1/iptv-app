import { View, Text } from "react-native";
import { cn } from "../../lib/utils";

const Card = ({ className, ...props }: React.ComponentProps<typeof View> & { className?: string }) => (
  <View
    className={cn(
      "rounded-lg border border-gray-200 bg-white shadow-sm",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.ComponentProps<typeof View> & { className?: string }) => (
  <View className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<typeof Text> & { className?: string }) => (
  <Text
    className={cn("text-xl font-semibold leading-none tracking-tight text-gray-900", className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: React.ComponentProps<typeof Text> & { className?: string }) => (
  <Text className={cn("text-sm text-gray-600", className)} {...props} />
);

const CardContent = ({ className, ...props }: React.ComponentProps<typeof View> & { className?: string }) => (
  <View className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<typeof View> & { className?: string }) => (
  <View className={cn("flex flex-row items-center p-6 pt-0", className)} {...props} />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };