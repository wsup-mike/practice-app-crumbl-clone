import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Gesture1Screen = () => {
  return (
    // <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
  <View className='flex-1'>
    <View className='bg-pink-400'>
    <Text className='text-3xl'>Hello world</Text>
    <Button title='This is a button'/>
    <Button title='This is a button'/>
    <Button title='This is a button'/>
    <Button title='This is a button'/>
    <Button title='This is a button'/>
    <Button title='This is a button'/>
    </View>
  </View>
  )
}

export default Gesture1Screen