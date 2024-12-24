import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SECTION_DATA = [
    {title: 'Title 1', data: ['item1', 'item2', 'item3']},
    {title: 'Title 2', data: ['item4', 'item5', 'item6']},
    {title: 'Title 3', data: ['item7', 'item8', 'item9']},
]
const SectionListScreen = () => {
  return (
    <View>
      <Text>SectionListScreen</Text>
      <SectionList 
        sections={SECTION_DATA}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default SectionListScreen

const styles = StyleSheet.create({})