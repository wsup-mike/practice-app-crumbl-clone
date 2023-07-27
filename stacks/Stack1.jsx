import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import screen1 from '../screens/screen1';

const Stack = createStackNavigator();

const stack1 = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='screen1' component={screen1}/>
    </Stack.Navigator>
  )
}

export default stack1