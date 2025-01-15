import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';

export type StackParamList = {
    StackScreen1: undefined;
    StackScreen2: {
        itemId: number;
    };
};
const Stack = createStackNavigator<StackParamList>();
const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StackScreen1" component={StackScreen1} />
            <Stack.Screen
                options={({route}) => ({title: `Item ${route.params.itemId}`})}
                name="StackScreen2"
                component={StackScreen2}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;

const styles = StyleSheet.create({});
