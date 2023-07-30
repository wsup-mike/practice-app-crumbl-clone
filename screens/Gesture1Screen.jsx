import { View, Text, SafeAreaView, Animated, Pressable, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Gesture1Screen = () => {
  const [animated, setAnimated] = useState(true)
  const translation = useRef(new Animated.Value(0)).current
  const translation2 = useRef(new Animated.Value(0)).current

  // My helper function
  const toggleBox = () => {
    const targetValue = animated ? 300 : 0;
    
    Animated.spring(translation2, {
      toValue: targetValue,
      useNativeDriver: true,
    }).start()

    setAnimated(!animated)
  }

  // The useEffect side effect for Square #1
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 300,
      useNativeDriver: true,
      duration: 7000,
    }).start()
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-lime-400'>
      <View>
        <Text className='text-3xl font-extralight text-white text-center mt-8'>Gesture1Screen</Text>
      </View>

      {/* Square #1 */}
      <Text className='text-center text-xl font-extralight text-white mt-3 ml-3'>Left to Right: 300px distance - Animated.timing( )</Text>
      <Animated.View 
        className='w-14 h-14 bg-teal-500 mt-3 ml-3'
        style={{
          transform: [{translateX: translation}],
        }}
      />

      {/* Square #2 */}
      <Text className='text-center text-xl font-extralight text-white mt-3 ml-3'>Or Press to activate animation: L - R 300</Text>
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