import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useRef } from 'react'

const Gesture1Screen = () => {

  const translation = useRef(new Animated.Value(0)).current

  return (
  <SafeAreaView className='flex-1 bg-lime-400'>
    <View className=''>
      <Text className='text-3xl font-extralight text-white text-center mt-8'>Gesture1Screen</Text>
    </View>
    <Text className='text-xl font-extralight text-white mt-3 ml-3'>Left to Right: 50px distance</Text>
    <View 
      className='w-14 h-14 bg-teal-500 mt-3 ml-3'
    />
  </SafeAreaView>
  )
}

export default Gesture1Screen