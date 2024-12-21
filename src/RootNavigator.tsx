import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import StackNavigation from './components/stack/StackNavigation'
import TabsNavigationDemo from './components/tabs/TabsNavigationDemo'
import DrawerNavigationDemo from './components/drawer/DrawerNavigationDemo'

export type RootStackParamsList = {
    Home: undefined;
    StackDemoPage: undefined;
    TabDemo: undefined;
    Drawer: undefined;
}

const Stack = createStackNavigator<RootStackParamsList>()
const RootNavigator:React.FC = () => {
  return (
   <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='StackDemoPage' component={StackNavigation}/>
        <Stack.Screen name='TabDemo' component={TabsNavigationDemo}/>
        <Stack.Screen name='Drawer' component={DrawerNavigationDemo}/>
   </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})