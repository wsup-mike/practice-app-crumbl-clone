import { View, Text, Button, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Easing } from 'react-native';

const Modal1 = ({ onClose, visible }) => {
    
    // const { height } = Dimensions.get('screen');
    const { height, width } = Dimensions.get('window');
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
                style={{ opacity: backgroundOpacity }} />

            <Animated.View 
                className='absolute items-center  h-full pt-5'
                style={{ 
                    width: width,
                    transform: [{ translateY: transY.current }],
                }}
            >
                
                    <View className='bg-white h-screen w-full items-center justify-center rounded-t-2xl'
                        style={{ width: '100%'}}
                    >
                        <Button title='Close Modal' onPress={onPress}/>
                    </View>
                
            </Animated.View>
        </>
    )
}

export default Modal1