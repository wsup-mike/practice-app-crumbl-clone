import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Gesture1Stack from './stacks/Gesture1Stack';
import Gesture2Stack from './stacks/Gesture2Stack'
import Gesture3Stack from './stacks/Gesture3Stack'
import Gesture4Stack from  './stacks/Gesture4Stack'
import Gesture5Stack from './stacks/Gesture5Stack'

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
        <Tab.Navigator initialRouteName='Gesture1Stack'>
            <Tab.Screen name='Gesture1Stack' component={Gesture1Stack}/>
            <Tab.Screen name='Gesture2Stack' component={Gesture2Stack}/>
            <Tab.Screen name='Gesture3Stack' component={Gesture3Stack}/>
            <Tab.Screen name='Gesture4Stack' component={Gesture4Stack}/>
            <Tab.Screen name='Gesture5Stack' component={Gesture5Stack}/>
        </Tab.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})