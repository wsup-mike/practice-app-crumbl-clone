import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedModalsScreen from "../screens/AnimatedModalsScreen";
import Modal1 from "../screens/Modal1";
import Modal2 from "../screens/Modal2";

const AnimatedModalsStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AnimatedModalsScreen"
        component={AnimatedModalsScreen}
      />
      <Stack.Screen name="Modal1" />
    </Stack.Navigator>
  );
};

export default AnimatedModalsStack;
