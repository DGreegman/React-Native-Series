import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';

const ThemeScreen = () => {
  const {theme, toggleTheme} = useTheme();

  const isDarkMode = theme === 'dark';
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? '#ffffff' : '#000000',
          },
        ]}>
        ThemeScreen
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f3f4f4'}
        ios_backgroundColor={'#3e3e3e'}
      />
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
