import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BasicAnimation from './screens/BasicAnimation';
import Interpolation from './screens/Interpolation';
import GestureAnimation from './screens/GestureAnimation';
import CombinedAnimation from './screens/CombinedAnimation';
import Reanimated from './screens/Reanimated';
import ReanimatedTypes from './screens/ReanimatedTypes';
import ReanimatedGesture from './screens/ReanimatedGesture';
import ReanimatedForm from './screens/ReanimatedForm';

export type RootStackParamsList = {
    Home: undefined;
    BasicAnimation: undefined;
    Interpolation: undefined;
    Gesture: undefined;
    Combined: undefined;
    Reanimated: undefined;
    ReanimatedTypes: undefined;
    ReanimatedGesture: undefined;
    ReanimatedForm: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
            <Stack.Screen name="Interpolation" component={Interpolation} />
            <Stack.Screen name="Gesture" component={GestureAnimation} />
            <Stack.Screen name="Combined" component={CombinedAnimation} />
            <Stack.Screen name="Reanimated" component={Reanimated} />
            <Stack.Screen name="ReanimatedTypes" component={ReanimatedTypes} />
            <Stack.Screen
                name="ReanimatedGesture"
                component={ReanimatedGesture}
            />
            <Stack.Screen name="ReanimatedForm" component={ReanimatedForm} />
        </Stack.Navigator>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({});
