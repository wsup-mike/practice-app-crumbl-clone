import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedModals from "../screens/AnimatedModals";

const AnimatedModalsStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="AnimatedModals" component={AnimatedModals} />
    </Stack.Navigator>
  );
};

export default AnimatedModalsStack;
