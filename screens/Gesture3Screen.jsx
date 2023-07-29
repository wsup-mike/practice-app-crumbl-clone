import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

const Gesture3Screen = () => {
  return (
    <SafeAreaView className='flex-1 bg-green-300'>
      <Text className='text-center text-3xl font-extralight text-white mt-3'>Gesture3Screen</Text>
      <Text className='text-white text-xl text-center'>Interpolation Practice</Text>

      <Pressable 
        onPress={animation}
      >
        <View className='h-10 w-60 bg-orange-600 p-1 ml-3 mt-4 justify-center rounded-md'>
          <Text className='text-center text-white'>Press to Animate - In Sequence</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

export default Gesture3Screen