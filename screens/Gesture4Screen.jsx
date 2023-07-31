import { View, Text, SafeAreaView, Animated, useWindowDimensions } from 'react-native'
import React, { useRef, useEffect } from 'react'

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const Gesture4Screen = (props) => {
  // const touch = useRef(
  //   new Animated.ValueXY({ x: 0, y: 0 })
  // ).current;

  const touch = useRef(new Animated.ValueXY()).current;
  const dimensions = useWindowDimensions();

    

  return (
    <SafeAreaView
      className='flex-1 bg-stone-400'
      onStartShouldSetResponder={() => true}
      onResponderMove={(event) => {
        touch.setValue({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        })
      }}
    >
      <Text className='text-3xl font-extralight text-white text-center mt-3'>Gesture4Screen</Text>
      <Animated.View
        style={{
          position: 'absolute',
          // left: dimensions.width / 2 - CURSOR_HALF_SIDE_SIZE,
          left: touch.x,
          // top: dimensions.height / 2 - CURSOR_HALF_SIDE_SIZE, 
          top: touch.y,
          height: CURSOR_SIDE_SIZE,
          width: CURSOR_SIDE_SIZE,
          borderRadius: CURSOR_HALF_SIDE_SIZE,
          backgroundColor: 'orange',
        }}
      />
        
      
    </SafeAreaView>
  )

}

export default Gesture4Screen