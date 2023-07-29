import { View, Text, SafeAreaView, Animated, Pressable, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Gesture1Screen = () => {
  const [animated, setAnimated] = useState(true)
  const translation = useRef(new Animated.Value(0)).current
  const translation2 = useRef(new Animated.Value(0)).current

  const toggleBox = () => {
    const targetValue = animated ? 300 : 0;
    
    Animated.spring(translation2, {
      toValue: targetValue,
      useNativeDriver: true,
    }).start()

    setAnimated(!animated)
  }

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 300,
      useNativeDriver: true,
    }).start()
  }, []);

  return (
  <SafeAreaView className='flex-1 bg-lime-400'>
    <View>
      <Text className='text-3xl font-extralight text-white text-center mt-8'>Gesture1Screen</Text>
    </View>

    <Text className='text-center text-xl font-extralight text-white mt-3 ml-3'>Left to Right: 300px distance - Animated.timing( )</Text>
    <Animated.View 
      className='w-14 h-14 bg-teal-500 mt-3 ml-3'
      style={{
        transform: [{translateX: translation}],
      }}
    />

    <Text className='text-center text-xl font-extralight text-white mt-3 ml-3'>Or Press to activate animation: L - R 300</Text>
    {/* <View className='w-32 h-12 bg-red-400 rounded-lg justify-center self-center'><Text className='text-center text-white'>Tap to Animate</Text></View> */}
    {/* <Button title='Tap to Animate' onPress={() => {
      Animated.timing(translation2, {
        toValue: 300,
        useNativeDriver: true,
      }).start()
    }} /> */}

    <Button 
      title='Tap to Animate Back or Forth'
      onPress={toggleBox}
    />

    <Animated.View 
      className='w-14 h-14 bg-teal-500 mt-3 ml-3'
      style={{
        transform: [{translateX: translation2}],
      }}
    />
  </SafeAreaView>
  )
}

export default Gesture1Screen