import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useRef } from 'react'

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const Gesture4Screen = (props) => {
  const touch = useRef(
  
  ).current;

  return (
    <SafeAreaView className='flex-1 justify-center bg-stone-400'>
      <Text className='text-3xl font-extralight text-white text-center'>Gesture4Screen</Text>
    </SafeAreaView>
  )

}

export default Gesture4Screen