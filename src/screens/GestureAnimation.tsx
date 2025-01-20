import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const GestureAnimation = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: pan.x,
                        dy: pan.y,
                    },
                ],
                {useNativeDriver: false},
            ),
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    useNativeDriver: false,
                }).start();
            },
        }),
    ).current;
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>GestureAnimation</Text>
            <Text style={styles.headerText}>Drag the Box</Text>

            <Animated.View
                style={[styles.box, pan.getLayout()]}
                {...panResponder.panHandlers}>
                <Text style={styles.textBox}>Drag me</Text>
            </Animated.View>
        </View>
    );
};

export default GestureAnimation;

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
        backgroundColor: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
    },
    textBox: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
