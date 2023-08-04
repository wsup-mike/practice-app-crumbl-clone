import { View, Text, SafeAreaView, Button, Animated, Dimensions, Easing } from 'react-native'
import React , { useRef, useEffect }from 'react'

const Modal3 = ({ visible3, onClose }) => {
    // Destructure hieght from screen Dimensions
    const { height } = Dimensions.get('screen')

    // Create use Animated.Value for y axis starts at distance value 'height'
    const transY = useRef(new Animated.Value(height))

    // Handler in the Modal3 button to close the modal by changing state visible3 using the onClose
    const onPress = () => {
        onClose()
        console.log(visible3)
    }

    useEffect(() => {
        if (visible3) {
            Animated.timing(transY, {
                toValue: 0,
                duration: 225,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(transY, {
                toValue: height,
                duration: 225,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
        }).start()
        }
    }, [visible3]);


    return (
        <Animated.View 
            className='absolute flex-1 justify-center h-screen w-screen bg-green-400 mt-9 rounded-2xl'
            style={{
                transform: [{ translateY: transY}]
            }}
        >
            <View className='flex-1 justify-center items-center'>
                <Text>Modal3</Text>
                <Button title='Close Modal 3' onPress={onPress}/>
            </View> 
        </Animated.View>
    )
}

export default Modal3