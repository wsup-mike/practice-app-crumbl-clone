import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const RootNavigator = () => {
  return (
    <View>
        <Text>The Root</Text>
        <StatusBar style="auto" />
      </View>
  )
}

export default RootNavigator