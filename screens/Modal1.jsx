import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Modal1 = ({ onClose }) => {

    const onPress = () => {
        onClose();
    }

    return (
        <View className=' items-center w-full h-full'>
            <View className='bg-white h-2/3 w-10/12 items-center justify-center rounded-xl'>
                <Button title='Close Modal' onPress={onPress}/>
            </View>
        </View>
    )
}

export default Modal1