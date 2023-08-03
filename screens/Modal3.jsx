import { View, Text, SafeAreaView, Button } from 'react-native'
import React , { useRef }from 'react'

const Modal3 = ({ visible3 }) => {
  return (
    <View className='flex-1 justify-center h-2/5 w-3/5 bg-green-400'>
        <View className='flex-1 justify-center items-center'>
            <Text>Modal3</Text>
            <Button title='Show Modal 3' />
        </View> 
    </View>
  )
}

export default Modal3