import { View, Text, Button, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Easing } from 'react-native';

const Modal2 = ({ onClose, visible2 }) => { // Pass in from parent: handler n state 'visible2' 2 be used here

    const { width } = Dimensions.get('screen') // get dimensions of user's existing screen height and width
    
    const transX = useRef(new Animated.Value(width)).current // 2 hold a new ref value named transX to animate on

    // A useEffect runs on both: initial render + whenever 'visible' changes
    useEffect(() => {
        console.log(width)
        if (visible2) {
            Animated.timing(transX, {
                toValue: 0,
                duration: 225,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start()
        } else {
            Animated.timing(transX, {
                toValue: width,
                duration: 225,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start()
        }
    }, [visible2])

    const onPress = () => {
        onClose();
    }    
    
    return (
        <>
            <Animated.View
                className='absolute items-center h-screen w-screen pt-5'
                style={{
                    transform: [{ translateX: transX }]
                }}
            >
                <View 
                    className='bg-black h-screen w-screen items-center justify-center rounded-t-2xl'
                    style={{ width: '100%'}}
                >
                    <Button title='Close Modal2' onPress={onPress} />
                </View>
            </Animated.View>
                
            
        </>
  )
}

export default Modal2