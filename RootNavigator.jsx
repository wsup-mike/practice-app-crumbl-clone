import { View, Text } from 'react-native'
import React from 'react'

const RootNavigator = () => {
  return (
    <View style={styles.container}>
        <Text>The Root</Text>
        <StatusBar style="auto" />
      </View>
  )
}

export default RootNavigator