import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useDebugValue} from 'react';
import Animated, {
    cancelAnimation,
    Easing,
    useAnimatedRef,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const Reanimated = () => {
    const offSet = useSharedValue(0);
    const rotation = useSharedValue(0);
    const scale = useSharedValue(1);

    const reanimatedRef = useAnimatedRef<Animated.View>();

    const opacity = useDebugValue(() => {
        return Math.sin((rotation.value * Math.PI) / 180) / 2 + 0.5;
    });

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: offSet.value},
                {rotate: `${rotation.value}deg`},
                {scale: scale.value},
            ],
            // opacity: opacity.value,
        };
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: 1 / scale.value,
                },
            ],
        };
    });

    const handleStartAnimation = () => {
        offSet.value = withSpring(Math.random() * 200 - 100);
        rotation.value = withRepeat(
            withTiming(360, {duration: 2000, easing: Easing.linear}),
            -1,
            false,
        );
        scale.value = withRepeat(
            withTiming(1.5, {duration: 2000, easing: Easing.linear}),
            -1,
            true,
        );
    };

    const stopAnimation = () => {
        cancelAnimation(offSet);
        cancelAnimation(rotation);
        cancelAnimation(scale);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Reanimated Core Concepts</Text>

            <Animated.View ref={reanimatedRef} style={[styles.box, boxStyle]}>
                <Animated.Text style={[styles.boxText, textStyle]}>
                    Animated Box
                </Animated.Text>
            </Animated.View>

            <View style={styles.btnContainer}>
                <Pressable style={styles.btn} onPress={handleStartAnimation}>
                    <Text style={styles.btnText}>Translate</Text>
                </Pressable>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn} onPress={stopAnimation}>
                    <Text style={styles.btnText}>Stop Animation</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Reanimated;

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
        width: 150,
        height: 150,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    btnContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    btn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
