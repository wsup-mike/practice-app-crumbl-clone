import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import Modal1 from './Modal1';

const AnimatedModalsScreen = () => {
  const [visible, setVisible] = useState(false)

  handleShowModal = () => {
    setVisible(true)
  }
 
 
  handleCloseModal = () => {
    setVisible(false)
  }

 
  return (
    <>
      <View className='absolute w-full h-full bg-black' />
      <SafeAreaView className='flex-1 items-center bg-indigo-400 scale-90'>
        <Text className='text-center font-extralight text-3xl mt-3 text-white'>AnimatedModalsScreen</Text>
        <Button title='Show Modal1' onPress={handleShowModal}/>
        <Modal1 visible={visible} onClose={handleCloseModal} />
      </SafeAreaView>
    </>
  )
}

export default AnimatedModalsScreen