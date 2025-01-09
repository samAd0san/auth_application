import "./global.css";
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-black font-bold text-2xl text-center">Hello, NativeWind!</Text>
    </View>
  );
}