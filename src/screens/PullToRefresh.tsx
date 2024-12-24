import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const INITIAL_DATA = Array.from({length: 20}, (_, i) => ({
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
            <Text style={{fontSize:18, fontWeight:'bold', padding:15}}>{item.title}</Text>
        </View>
        )
    }

    const loadMoreItems = () => {
        if(!loading){
            setLoading(true)

            // load more items
            setTimeout(()=>{
                const newData = Array.from({length: 20}, (_, i) => ({
                    key: (i + data.length).toString(), 
                    title: `Item ${i + data.length + 1}`
                }))
                setData([...data, ...newData])
                setLoading(false)
            }, 2000)
        }
    }

    const handleRefresh = () => {
        setRefreshing(true)
        // refresh data
        setTimeout(()=>{
            setData(INITIAL_DATA)
            setRefreshing(false)
        }, 2000)
    }
  return (
    <View>
      <Text>Large List Pull To Refresh</Text>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}

        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>
        }
        ListFooterComponent={
            loading ? <ActivityIndicator style={styles.loader} size='large' color='blue'/> : null
        }
      />
    </View>
  )
}

export default PullToRefresh

const styles = StyleSheet.create({
    loader: {
        marginVertical: 20
    }
})