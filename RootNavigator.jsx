
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RootNavigator = () => {
  return (
        <View style={styles.container}>
            <Text>The Root</Text>
        </View>
    )
}

export default RootNavigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });