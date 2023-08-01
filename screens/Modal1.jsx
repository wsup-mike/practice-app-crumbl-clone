import { View, Text, Button, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Easing } from 'react-native';

const Modal1 = ({ onClose, visible }) => {
    
    const { height } = Dimensions.get('screen');
    const transY = useRef(new Animated.Value(height))

    useEffect(() => {
        if (visible) {
            Animated.timing(transY.current, {
                toValue: 0,
                duration: 225,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start()
        } else {
            Animated.timing(transY.current, {
                toValue: height,
                duration: 250,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start()
        }
    }, [visible]);

    const onPress = () => {
        onClose();
    }

    return (
        <>
            <Animated.View pointerEvents='none' className='absolute w-full h-screen justify-center items-center bg-indigo-700 opacity-80' style={{ opacity: 0.3}} />

            <Animated.View 
                className='absolute items-center w-full h-full pt-5'
                style={{ 
                    transform: [{ translateY: transY.current }]
                }}
            >
                
                    <View className='bg-white h-screen w-full items-center justify-center rounded-t-2xl'>
                        <Button title='Close Modal' onPress={onPress}/>
                    </View>
                
            </Animated.View>
        </>
    )
}

export default Modal1