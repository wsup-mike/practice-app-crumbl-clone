import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { Pressable } from 'react-native';

const Gesture2Screen = () => {
  const [firstAnimated, setFirstAnimated] = useState(true)
  const [secondAnimated, setSecondAnimated] = useState(true)

  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  const translation2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

  const animation1 = () => {
    if (firstAnimated) {
      Animated.sequence([
        Animated.spring(translation.x, {
          toValue: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: 70,
          useNativeDriver: true,
        }),
      ]).start()
      setFirstAnimated(!firstAnimated)
    } else {
      Animated.sequence([
        Animated.spring(translation.y, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translation.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start()
      setFirstAnimated(!firstAnimated)
    }
  }
  
  const animation2 = () => {
    if (secondAnimated) {
      Animated.parallel([
        Animated.spring(translation2.x, {
          toValue: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translation2.y, {
          toValue: 70,
          useNativeDriver: true,
        }),
      ]).start()
      setSecondAnimated(!secondAnimated)
    } else {
      Animated.sequence([
        Animated.spring(translation.y, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translation.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start()
      setSecondAnimated(!secondAnimated)
    }
  }

  // const animation2 = () => {
  //   Animated.parallel([
  //     Animated.spring(translation2.x, {
  //       toValue: 300,
  //       useNativeDriver: true,
  //     }),
  //     Animated.spring(translation2.y, {
  //       toValue: 70,
  //       useNativeDriver: true,
  //     })
  //   ]).start()
  // }

  return (
    <SafeAreaView className='flex-1 bg-orange-400'>
      <Text className='text-3xl text-center font-extralight text-white mt-3'>Gesture2Screen</Text>

      <Pressable 
        onPress={animation1}
      >
        <View className='h-10 w-60 bg-orange-600 p-1 ml-3 mt-4 justify-center rounded-md'>
          <Text className='text-center text-white'>Press to Animate - In Sequence</Text>
        </View>
      </Pressable>
      <Animated.View 
        className='h-16 w-16 bg-teal-300 mt-3 ml-3'
        style={{
          transform: [
            { translateX: translation.x },
            { translateY: translation.y },
          ]
        }}
      />
      
      <Pressable 
        onPress={animation2}
      >
        <View className='h-10 w-60 bg-orange-600 p-1 ml-3 mt-4 justify-center rounded-md'>
          <Text className='text-center text-white'>Press to Animate - In Parallel</Text>
        </View>
      </Pressable>
      <Animated.View 
        className='h-16 w-16 bg-teal-300 mt-3 ml-3'
        style={{
          transform: [
            { translateX: translation2.x },
            { translateY: translation2.y },
          ]
        }}
      />
    </SafeAreaView>
  )
}

export default Gesture2Screen