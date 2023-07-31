import { View, Text ,SafeAreaView, Image, PanResponder } from 'react-native'
import React, { useRef } from 'react'


const Gesture5Screen = () => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {},
      onPanResponderRelease: (
        evt, gestureState
      ) => {}
    })
  ).current
  
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-indigo-500'>
      <Text className='text-center font-extralight text-white text-3xl'>The Kiddos</Text>
      <Image 
        style={{width: 350, height: 500}}
        className='rounded-xl'
        source={require('../assets/Cousins.jpg')}
      />
    </SafeAreaView>
  )
}

export default Gesture5Screen