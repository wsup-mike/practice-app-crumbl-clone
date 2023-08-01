import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedModalsScreen from "../screens/AnimatedModalsScreen";

const AnimatedModalsStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AnimatedModalsScreen"
        component={AnimatedModalsScreen}
      />
    </Stack.Navigator>
  );
};

export default AnimatedModalsStack;
