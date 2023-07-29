import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Gesture1Screen = () => {

  const translation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start()
  }, []);

  return (
  <SafeAreaView className='flex-1 bg-lime-400'>
    <View className=''>
      <Text className='text-3xl font-extralight text-white text-center mt-8'>Gesture1Screen</Text>
    </View>
    <Text className='text-center text-xl font-extralight text-white mt-3 ml-3'>Left to Right: 50px distance - Animated.timing( )</Text>
    <Animated.View 
      className='w-14 h-14 bg-teal-500 mt-3 ml-3'
    />
  </SafeAreaView>
  )
}

export default Gesture1Screen