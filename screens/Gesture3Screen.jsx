import { View, Text, SafeAreaView, Pressable, Animated } from 'react-native'
import React, { useRef } from 'react'

const Gesture3Screen = () => {

  const translation = useRef(new Animated.Value(0)).current

  const animation = () => {
    Animated.parallel([
      Animated.timing(translation, {
        toValue: 300,
        useNativeDriver: true,
        duration: 1000,
      }),

      // Animated.timing(translation, {
      //   toValue: 300,
      //   useNativeDriver: true,
      //   duration: 1000,
      // })
    ]).start()
  };

  return (
    <SafeAreaView className='flex-1 bg-green-300'>
      <Text className='text-center text-3xl font-extralight text-white mt-3'>Gesture3Screen</Text>
      <Text className='text-white text-xl text-center'>Interpolation Practice</Text>

      <Pressable 
        onPress={animation}
      >
        <View className='h-10 w-60 bg-orange-600 p-1 ml-3 mt-4 justify-center rounded-md'>
          <Text className='text-center text-white'>Press to see 3 animations in 1</Text>
        </View>
      </Pressable>
      <Text className='ml-3'>Moves right, rotates and changes opacity!</Text>

      <Animated.View 
        className='h-16 w-16 bg-yellow-500 mt-3 ml-3'
        style={{
          transform: [
            { translateX: translation },
            { rotate: translation.interpolate({
              inputRange: [0, 300],
              outputRange: ['0deg', '720deg'],
            })},
          ],
          backgroundColor: translation.interpolate({
            inputRange: [25, 300, 25],
            outputRange: ['red', 'blue', 'red'],
            extrapolate: 'clamp'
          })
          // opacity: translation.interpolate({
          //   inputRange: [0, 300],
          //   outputRange: [1, 0],
          // })
          
        }}
      />

    </SafeAreaView>
  )
}

export default Gesture3Screen