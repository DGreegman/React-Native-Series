import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'



type DrawerNavigationParamsList = {
    DrawerScreen1: undefined
    DrawerScreen2: undefined
}
const DrawerScreen1: React.FC<DrawerScreen1Props> = ({navigation}) => {
    return (
        <View>
        <Text>DrawerScreen1</Text>
        <Button title='Go to DrawerScreen2' onPress={() => navigation.openDrawer()}/>
        </View>
    )
}

const DrawerScreen2:React.FC = () => {
    return (
        <View>
        <Text>DrawerScreen2</Text>
        </View>
    )
}

const Drawer = createDrawerNavigator<DrawerNavigationParamsList>()

type DrawerScreen1Props = {
    navigation: DrawerNavigationProp<DrawerNavigationParamsList, 'DrawerScreen1'>
}
type DrawerScreen2Props = {
    navigation: DrawerNavigationProp<DrawerNavigationParamsList, 'DrawerScreen2'>
}
const DrawerNavigationDemo = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='DrawerScreen1' component={DrawerScreen1}/>
        <Drawer.Screen name='DrawerScreen2' component={DrawerScreen2}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigationDemo

const styles = StyleSheet.create({})