import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gesture1Screen from "../screens/Gesture1Screen";

const Stack = createStackNavigator();

const Gesture1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gesture1" component={Gesture1Screen} />
    </Stack.Navigator>
  );
};

export default Gesture1Stack;
