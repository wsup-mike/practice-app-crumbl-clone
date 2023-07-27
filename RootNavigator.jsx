import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
        <View style={styles.container}>
            <Text>I hate REact Native</Text>
        </View>
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