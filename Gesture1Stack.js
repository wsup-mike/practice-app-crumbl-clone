import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Gesture1Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gesture1" component={Gesture2Screen} />
    </Stack.Navigator>
  );
};

export default Gesture1Stack;
