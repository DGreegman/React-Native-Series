import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FLAT_DATA = Array.from({length: 100}, (_, i) => ({
    key: i.toString(), 
    title: `Item ${i + 1}`
}))
const FlatListScreen:React.FC = () => {
    const handleRenderItem = ({item}:{item:{key:string, title:string}}) => {
        return (
        <View style={{padding:10}}>
            <Text>{item.title}</Text>
            {/* <Button title='Go to StackScreen2' onPress={()=>{}}/> */}
        </View>
        )
    }
    
  return (
    <View>
      <Text>FlatListScreen</Text>
      <FlatList 
        data={FLAT_DATA}
        renderItem={handleRenderItem}
        keyExtractor={item => item.key}
        />
    </View>
  )
}

export default FlatListScreen

const styles = StyleSheet.create({})