import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gesture1Screen from "../screens/Gesture1Screen";

const Stack = createStackNavigator();

const Gesture2Stack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gesture2" component={Gesture2Screen} />
    </Stack.Navigator>
  );
};

export default Gesture2Stack;
