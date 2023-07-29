import { View, Text, SafeAreaView, Pressable, Animated } from 'react-native'
import React, { useRef } from 'react'

const Gesture3Screen = () => {

  const translation = useRef(new Animated.Value(0)).current

  const animation = () => {

  };

  return (
    <SafeAreaView className='flex-1 bg-green-300'>
      <Text className='text-center text-3xl font-extralight text-white mt-3'>Gesture3Screen</Text>
      <Text className='text-white text-xl text-center'>Interpolation Practice</Text>

      <Pressable 
        onPress={() => {}}
      >
        <View className='h-10 w-60 bg-orange-600 p-1 ml-3 mt-4 justify-center rounded-md'>
          <Text className='text-center text-white'>Press to see 3 animations in 1</Text>
        </View>
      </Pressable>

      <Animated.View 
        className='h-16 w-16 bg-yellow-500 mt-3 ml-3'
        style={{
          transform: [
      
          ]
        }}
      />

    </SafeAreaView>
  )
}

export default Gesture3Screen