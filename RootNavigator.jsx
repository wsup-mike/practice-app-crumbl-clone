import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Gesture1Stack from './stacks/Gesture1Stack';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name='Gesture1Stack' component={Gesture1Stack}/>
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