import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AnimatedModalsStack = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <Text>AnimatedModalsStack</Text>
    </View>
  );
};

export default AnimatedModalsStack;
