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
                duration: 2000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start()
        }
    }, [visible]);

    const onPress = () => {
        onClose();
    }

    return (
        <Animated.View 
            className='absolute items-center w-full h-full'
            style={{ 
                transform: [{ translateY: transY.current }]
            }}
        >
            <View className='bg-white h-2/3 w-10/12 items-center justify-center rounded-xl'>
                <Button title='Close Modal' onPress={onPress}/>
            </View>
        </Animated.View>
    )
}

export default Modal1