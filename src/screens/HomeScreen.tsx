import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';

const topics = [
    // {id: 1, name: 'React', screen: 'FlatList'},
    {id: 2, name: 'BasicAnimation', screen: 'BasicAnimation'},
    {id: 3, name: 'Interpolation', screen: 'Interpolation'},
    {id: 4, name: 'Combined', screen: 'Combined'},
    {id: 5, name: 'Gesture', screen: 'Gesture'},
    {id: 6, name: 'Reanimated', screen: 'Reanimated'},
    {id: 7, name: 'ReanimatedTypes', screen: 'ReanimatedTypes'},
    {id: 8, name: 'ReanimatedGesture', screen: 'ReanimatedGesture'},
    {id: 9, name: 'ReanimatedForm', screen: 'ReanimatedForm'},
];
type HomeScreenNavigationProps = StackNavigationProp<
    RootStackParamsList,
    'Home'
>;

type props = {
    navigation: HomeScreenNavigationProps;
};
const HomeScreen: React.FC<props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>

            <FlatList
                data={topics}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate(
                                item.screen as keyof RootStackParamsList,
                            )
                        }>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        gap: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginVertical: 5,
        color: '#fff',
    },
});
