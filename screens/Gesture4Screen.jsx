import { View, Text, SafeAreaView, Animated, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const Gesture4Screen = (props) => {
  const touch = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;

  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView className='flex-1 bg-stone-400'>
      <Text className='text-3xl font-extralight text-white text-center mt-3'>Gesture4Screen</Text>
      <View
        style={{
          position: 'absolute',
          left: dimensions.width / 2 - CURSOR_HALF_SIDE_SIZE,
          top: dimensions.height / 2 - CURSOR_HALF_SIDE_SIZE, 
          height: CURSOR_SIDE_SIZE,
          width: CURSOR_SIDE_SIZE,
          borderRadius: CURSOR_HALF_SIDE_SIZE,
          backgroundColor: 'orange',
        }}
      >
        
      </View>
    </SafeAreaView>
  )

}

export default Gesture4Screen