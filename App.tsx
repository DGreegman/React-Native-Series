import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import RootNavigator from './src/RootNavigator';
import {ThemeProvider} from './src/context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
  },
});

export default App;
