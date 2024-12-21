import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/RootNavigator";




function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20
  },
  headerText:{
    fontSize:20,
  }
});

export default App;
