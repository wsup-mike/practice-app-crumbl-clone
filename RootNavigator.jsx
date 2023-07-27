import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import stack1 from './stacks/stack1';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name='stack1' component={stack1}/>
        </Tab.Navigator>
    )
}

export default RootNavigator

