import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const Interpolation = () => {
    const animation = useRef(new Animated.Value(0)).current;

    const handleStartAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: false,
        }).start(() => animation.setValue(0));
    };

    const backgroundColor = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['#fff', '#003', '#f3e'],
    });

    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const borderRadius = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [4, 100],
    });

    const size = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200],
    });
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Interpolation Animation Demo</Text>
            <Animated.View
                style={[
                    styles.box,
                    {
                        backgroundColor,
                        transform: [{rotate}],
                        borderRadius,
                        width: size,
                        height: size,
                    },
                ]}>
                <Text style={styles.boxText}>Interpolate Me!</Text>
            </Animated.View>
            <Button
                title="Start Animation Here"
                onPress={handleStartAnimation}
            />
        </View>
    );
};

export default Interpolation;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f0f0f0',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    boxText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
