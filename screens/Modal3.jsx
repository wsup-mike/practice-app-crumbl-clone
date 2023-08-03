import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

const Modal3 = ({ visible3 }) => {
  return (
    <View className='flex-1 justify-center'>
        <View className='flex-1 justify-center items-center'>
            <Text>Modal3</Text>
            <Button title='Show Modal 3' />
        </View> 
    </View>
  )
}

export default Modal3