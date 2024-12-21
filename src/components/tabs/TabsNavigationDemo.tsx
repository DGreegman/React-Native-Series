import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabScreen1 from './TabScreen1'
import TabScreen2 from './TabScreen2'

type TabsNavigationDemoProps = {
    TabScreen1: undefined
    TabScreen2: undefined
}


const TabsNavigationDemo = () => {
    const ButtonTab = createBottomTabNavigator<TabsNavigationDemoProps>()
  return (
    <ButtonTab.Navigator>
        <ButtonTab.Screen name='TabScreen1' component={TabScreen1}/>
        <ButtonTab.Screen name='TabScreen2' component={TabScreen2}/>
    </ButtonTab.Navigator>
  )
}

export default TabsNavigationDemo

const styles = StyleSheet.create({})