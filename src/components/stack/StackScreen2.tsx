import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from './StackNavigation'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

type StackScreen2Props = StackNavigationProp<StackParamList, 'StackScreen2'>
type StackScreen2PropsRoute = RouteProp<StackParamList, 'StackScreen2'>
const StackScreen2 = () => {

  const router = useRoute<StackScreen2PropsRoute>()
  const navigation = useNavigation<StackScreen2Props>()
  return (
    <View>
      <Text>StackScreen2</Text>
      <Text>itemId: {router.params.itemId}</Text>
      <Button title='Go to StackScreen1' onPress={()=>{navigation.goBack()}}/>
    </View>
  )
}

export default StackScreen2

const styles = StyleSheet.create({})