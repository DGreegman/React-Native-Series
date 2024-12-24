import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const INITIAL_DATA = Array.from({length: 100}, (_, i) => ({
    key: i.toString(), 
    title: `Item ${i + 1}`
}))
const PullToRefresh = () => {
    const [refreshing, setRefreshing] = React.useState(false)
    const [data, setData] = React.useState(INITIAL_DATA)
    const [loading, setLoading] = React.useState(false)

    const renderItem = ({item}:{item:{key:string, title:string}}) => {
        return (
        <View style={{padding:10, borderBottomWidth:1, borderBottomColor:'gray'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
        </View>
        )
    }
  return (
    <View>
      <Text>Large List Pull To Refresh</Text>
      <FlatList 
        data={data}
        renderItem={renderItem}
      />
    </View>
  )
}

export default PullToRefresh

const styles = StyleSheet.create({})