import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Stack1 from './stacks/stack1';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name='first stack' component={Stack1}/>
        </Tab.Navigator>
    )
}

export default RootNavigator

