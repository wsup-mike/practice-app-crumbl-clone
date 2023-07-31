import { View, Text ,SafeAreaView, Image, PanResponder, Animated, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'

const pointsDistance = ([xA, yA], [xB, yB]) => {
  return Math.sqrt(
    Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2)
  )
}

const Gesture5Screen = () => {
  const dimensions = useWindowDimensions();

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

  const scale = new Animated.Value(1)
  
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
        } else if (activeTouches >= 2 ) {
          const touches = evt.nativeEvent.changedTouches;
          const touchA = touches[0];
          const touchB = touches[1];

          const distance = pointsDistance(
            [touchA.pageX, touchA.pageY],
            [touchB.pageX, touchB.pageY],
          )

          const screenMovedPercents = distance / dimensions.width;

          scale.setValue(1 + screenMovedPercents)
        }
      },
      onPanResponderRelease: (
        evt, gestureState
      ) => {
        Animated.parallel([
          Animated.spring(pan, {
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
          }
          ),

          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]
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
            { scale: scale },
          ],
        }}
        className='rounded-xl'
        source={require('../assets/Cousins.jpg')}
      />
    </SafeAreaView>
  )
}

export default Gesture5Screen