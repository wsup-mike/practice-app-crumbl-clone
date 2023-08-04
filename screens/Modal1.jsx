import { View, Text, Button, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Easing } from 'react-native';

const Modal1 = ({ onClose, visible }) => {
    
    const { height, width } = Dimensions.get('screen');
    
    // Current user device screen height is captured and is now a mutable value
    // Note: 'height' is a distance value in pixels
    const transY = useRef(new Animated.Value(height))

    // 
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
                duration: 2000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start()
        }
    }, [visible]);

    const onPress = () => {
        onClose();
    }

    const backgroundOpacity = transY.current.interpolate({
        inputRange: [0, height],
        outputRange: [0.8, 0],
        extrapolate: 'clamp',
    })

    return (
        <>
            <Animated.View 
                pointerEvents='none' 
                className='
                    absolute w-screen h-screen justify-center items-center bg-indigo-700 opacity-80 
                ' 
                style={{ opacity: backgroundOpacity }} 
            />

            <Animated.View 
                className='absolute items-center  h-full pt-5'
                style={{ 
                    width: width,
                    transform: [{ translateY: transY.current }],
                }}
            >
                
                    <View className='bg-white h-screen w-screen items-center justify-center rounded-t-2xl'
                    >
                        <Button title='Close Modal' onPress={onPress}/>
                        <Button title='Open Modal 2' onPress={() => {}} />
                    </View>
                
            </Animated.View>
        </>
    )
}

export default Modal1