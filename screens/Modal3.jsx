import { View, Text, SafeAreaView, Button, Animated, Dimensions } from 'react-native'
import React , { useRef, useEffect }from 'react'

const Modal3 = ({ visible3 }) => {
    // Destructure hieght from screen Dimensions
    const { height } = Dimensions.get('screen')

    // Create use Animated.Value for y axis starts at distance value 'height'
    const transY = useRef(new Animated.Value(height)).current

    


    return (
        <View className='absolute flex-1 justify-center h-screen w-screen bg-green-400 mt-9 rounded-2xl'>
            <View className='flex-1 justify-center items-center'>
                <Text>Modal3</Text>
                <Button title='Close Modal 3' />
            </View> 
        </View>
    )
}

export default Modal3