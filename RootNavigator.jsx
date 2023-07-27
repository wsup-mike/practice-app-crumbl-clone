import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const RootNavigator = () => {
  return (
    <View>
        <Text style={styles.container}>The Root</Text>
        <StatusBar style="auto" />
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