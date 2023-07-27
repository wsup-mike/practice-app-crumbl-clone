import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gesture5Screen from "../screens/Gesture5Screen";

const Stack = createStackNavigator();

const Gesture5Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gesture5" component={Gesture5Screen} />
    </Stack.Navigator>
  );
};

export default Gesture5Stack;
