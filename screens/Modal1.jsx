import { View, Text, Button, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Modal1 = ({ onClose, visible }) => {
    
    const { height } = Dimensions.get('screen');
    const transY = useRef(new Animated.Value(height))


    const onPress = () => {
        onClose();
    }

    return (
        <View 
            className='absolute items-center w-full h-full'
            style={{ 
                transform: [{ translateY: transY.current }]
            }}
        >
            <View className='bg-white h-2/3 w-10/12 items-center justify-center rounded-xl'>
                <Button title='Close Modal' onPress={onPress}/>
            </View>
        </View>
    )
}

export default Modal1