import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const CombinedAnimation = () => {
    const moveAndRotateAnim = useRef(new Animated.Value(0)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;

    const combinedAnimation = () => {
        moveAndRotateAnim.setValue(0);
        Animated.timing(moveAndRotateAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false, // we useNativeDriver false is because we are going to use colors
        }).start();
    };

    const pulseAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.3,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    };

    const moveX = moveAndRotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
    });

    const moveY = moveAndRotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
    });
    const rotate = moveAndRotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const backgroundColor = moveAndRotateAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['#fff', '#003', '#f3e'],
    });
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>CombinedAnimation</Text>

            <Animated.View
                style={[
                    styles.box,
                    {
                        transform: [
                            {
                                translateX: moveX,
                            },
                            {
                                translateY: moveY,
                            },
                            {
                                rotate: rotate,
                            },
                            {
                                scale: pulseAnim,
                            },
                        ],
                        backgroundColor,
                    },
                ]}></Animated.View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Move-Rotate & Change-Color"
                    onPress={combinedAnimation}
                />
                <Button title="Pulse Animation" onPress={pulseAnimation} />
            </View>
        </View>
    );
};

export default CombinedAnimation;

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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
    },
});
