import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import Modal1 from './Modal1';

const AnimatedModalsScreen = () => {
  const [visible, setVisible] = useState(false)
  const { height } = Dimensions.get('window'); // this
    const transY = useRef(new Animated.Value(0)); // this

  handleShowModal = () => {
    setVisible(true)
  }
 
 
  handleCloseModal = () => {
    setVisible(false)
  }

 
  return (
    <>
      <View className='absolute w-full h-full bg-black' />
      <SafeAreaView className='flex-1 items-center bg-indigo-400 '>
        <Text className='text-center font-extralight text-3xl mt-3 text-white'>AnimatedModalsScreen</Text>
        <Button title='Show Modal1' onPress={handleShowModal}/>
        <Modal1 visible={visible} onClose={handleCloseModal} />
      </SafeAreaView>
    </>
  )
}

export default AnimatedModalsScreen