import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Gesture1Screen = () => {
  return (
    // <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
  <SafeAreaView className='flex-1'>
    <View className='bg-pink-400'>
      <Text className='text-3xl font-extralight'>Hello world</Text>
      <Button title='This is a button'/>
      <Button title='This is a button'/>
      <Button title='This is a button'/>
      <Button title='This is a button'/>
      <Button title='This is a button'/>
      <Button title='This is a button'/>
    </View>
  </SafeAreaView>
  )
}

export default Gesture1Screen