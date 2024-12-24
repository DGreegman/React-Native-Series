import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import FlatListScreen from './screens/FlatListScreen'
import SectionListScreen from './screens/SectionListScreen'
import ModalScreen from './screens/ModalScreen'
import PullToRefresh from './screens/PullToRefresh'
import DataFetching from './screens/DataFetching'

export type RootStackParamsList = {
    Home: undefined;
    FlatList: undefined;
    SectionList: undefined;
    Modal: undefined;
    PullToRefresh: undefined;
    DataFetching: undefined;
}

const Stack = createStackNavigator<RootStackParamsList>()
const RootNavigator:React.FC = () => {
  return (
   <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='FlatList' component={FlatListScreen}/>
        <Stack.Screen name='SectionList' component={SectionListScreen}/>
        <Stack.Screen name='Modal' component={ModalScreen}/> 
        <Stack.Screen name='PullToRefresh' component={PullToRefresh}/>
        <Stack.Screen name='DataFetching' component={DataFetching}/>

   </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})