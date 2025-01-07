import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';

const FLAT_DATA = Array.from({length: 100}, (_, i) => ({
  key: i.toString(),
  title: `Item ${i + 1}`,
}));
const FlatListScreen: React.FC = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const handleRenderItem = ({item}: {item: {key: string; title: string}}) => {
    return (
      <View
        style={[
          {padding: 10, backgroundColor: isDarkMode ? '#000000' : '#ffffff'},
        ]}>
        <Text
          style={{
            color: isDarkMode ? '#ffffff' : '#000000',
            paddingBottom: 10,
          }}>
          {item.title}
        </Text>
        {/* <Button title='Go to StackScreen2' onPress={()=>{}}/> */}
      </View>
    );
  };

  return (
    <View>
      <Text>FlatListScreen</Text>
      <FlatList
        data={FLAT_DATA}
        renderItem={handleRenderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({});
