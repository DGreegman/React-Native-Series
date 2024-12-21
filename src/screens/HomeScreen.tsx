import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../RootNavigator'

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamsList, 'Home'>
const HomeScreen:React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProps>()
    return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>

      <Button title='Stack Navigation Demo' onPress={()=>navigation.navigate('StackDemoPage')}/>
      <Button title='Tabs Navigation Demo' onPress={()=>navigation.navigate('TabDemo')}/>
      <Button title='Drawer Navigation Demo' onPress={()=>navigation.navigate('Drawer')}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        gap: 10
        // alignContent: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: 'white',
        marginBottom: 10
    }
})