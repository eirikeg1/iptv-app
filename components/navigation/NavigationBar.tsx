import { View, Pressable, Text } from 'react-native';
import { Home, Settings, LucideIcon } from 'lucide-react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';

type IconProps = React.ComponentProps<LucideIcon>;

const icons: Record<string, (props: IconProps) => React.JSX.Element> = {
  index: (props: IconProps) => <Home {...props} />,
  settings: (props: IconProps) => <Settings {...props} />,
};

function NavigationBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View className="flex-row bg-neutral-900 border-t border-neutral-700">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = icons[route.name];

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            className={`flex-1 items-center justify-center p-2 h-16 ${
              isFocused ? 'bg-neutral-800' : ''
            }`}
          >
            <Icon color={isFocused ? '#FFA500' : '#FFF'} size={24} />
            <Text
              className={`text-xs ${isFocused ? 'text-orange-500' : 'text-white'}`}
            >
              {options.title || route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function NavigationBar({ state, descriptors, navigation }: BottomTabBarProps)
