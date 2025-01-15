import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BasicAnimation from './screens/BasicAnimation';
import Interpolation from './screens/Interpolation';

export type RootStackParamsList = {
    Home: undefined;
    BasicAnimation: undefined;
    Interpolation: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
            <Stack.Screen name="Interpolation" component={Interpolation} />
        </Stack.Navigator>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({});
