import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from '../screens/screen1';

const Stack = createStackNavigator();

const Stack1 = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='screen1' component={Screen1}/>
    </Stack.Navigator>
  )
}

export default Stack1