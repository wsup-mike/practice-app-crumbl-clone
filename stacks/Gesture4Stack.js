import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gesture4Screen from "../screens/Gesture4Screen";

const Stack = createStackNavigator();

const Gesture4Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gesture4" component={Gesture4Screen} />
    </Stack.Navigator>
  );
};

export default Gesture4Stack;
