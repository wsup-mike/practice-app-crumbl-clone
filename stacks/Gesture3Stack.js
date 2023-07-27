import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gesture3Screen from "../screens/Gesture3Screen";

const Stack = createStackNavigator();

const Gesture3Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gesture3" component={Gesture3Screen} />
    </Stack.Navigator>
  );
};

export default Gesture3Stack;
