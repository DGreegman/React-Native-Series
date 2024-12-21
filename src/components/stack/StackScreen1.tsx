import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from './StackNavigation'
import { useNavigation } from '@react-navigation/native'

type StackScreenNavigationProp = StackNavigationProp<StackParamList, 'StackScreen1'>
const StackScreen1 = () => {
  const navigation = useNavigation<StackScreenNavigationProp>()
  return (
    <View>
      <Text>StackScreen1</Text>

      <Button title='Go to StackScreen2' onPress={()=>{navigation.navigate('StackScreen2', {itemId:200})}}/>
    </View>
  )
}

export default StackScreen1

const styles = StyleSheet.create({})