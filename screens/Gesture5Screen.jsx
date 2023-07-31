import { View, Text ,SafeAreaView, Image, PanResponder, Animated } from 'react-native'
import React, { useRef } from 'react'


const Gesture5Screen = () => {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const activeTouches = evt.nativeEvent.changedTouches.length;

        if (activeTouches === 1) {
          pan.setValue({
            x: gestureState.dx,
            y: gestureState.dy,
          })
        }
      },
      onPanResponderRelease: (
        evt, gestureState
      ) => {
        Animated.spring(pan, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
        }
        ).start()
      }
    })
  ).current
  
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-indigo-500'>
      <Text className='text-center font-extralight text-white text-3xl'>The Kiddos</Text>
      <Animated.Image 
        {...panResponder.panHandlers}
        style={{
          width: '90%', 
          height: '90%',
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
          ],
        }}
        className='rounded-xl'
        source={require('../assets/Cousins.jpg')}
      />
    </SafeAreaView>
  )
}

export default Gesture5Screen