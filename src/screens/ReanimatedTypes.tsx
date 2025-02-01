import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withDelay,
    withRepeat,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const ReanimatedTypes = () => {
    const translateX = useSharedValue(0);
    const scale = useSharedValue(1);
    const rotate = useSharedValue(0);

    const boxStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {scale: scale.value},
                {rotate: `${rotate.value}deg`},
            ],
        };
    });

    // handle timingAnimation
    const handleTiming = () => {
        translateX.value = withTiming(150, {
            duration: 1000,
            easing: Easing.out(Easing.exp),
        });
    };

    // handle decay Animation

    const decayAnimation = () => {
        translateX.value = withDecay({
            velocity: 200,
            clamp: [0, 300],
        });
    };

    // handle sequence animation
    const handleSequenceAnimation = () => {
        rotate.value = withSequence(
            withTiming(180, {duration: 1000}),
            withTiming(0, {duration: 1000}),
        );

        scale.value = withSequence(
            withTiming(1.5, {duration: 1000}),
            withTiming(1, {duration: 1000}),
        );
    };

    // handle delay animation
    const handleDelayAnimation = () => {
        translateX.value = withDelay(1000, withSpring(200));
    };

    // handle repeat animation
    const handleRepeatAnimation = () => {
        scale.value = withRepeat(withTiming(1.2, {duration: 1000}), 6, true);
    };
    // handle reset animation
    const handleResetAnimation = () => {
        translateX.value = withTiming(0);
        scale.value = withTiming(1);
    };

    // handle spring animation
    const handleSpringAnimation = () => {
        scale.value = withSpring(1.5, {
            damping: 10,
            stiffness: 100,
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>ReanimatedTypes</Text>

            <Animated.View style={[styles.box, boxStyle]}>
                <Text style={{color: 'white'}}>ReanimatedTypes</Text>
            </Animated.View>

            <View style={styles.btnContainer}>
                <Pressable style={styles.btn} onPress={handleTiming}>
                    <Text style={styles.btnText}>Timing</Text>
                </Pressable>

                <Pressable style={styles.btn} onPress={handleSpringAnimation}>
                    <Text style={styles.btnText}>Spring</Text>
                </Pressable>

                <Pressable style={styles.btn}>
                    <Text style={styles.btnText} onPress={decayAnimation}>
                        Decay
                    </Text>
                </Pressable>

                <Pressable style={styles.btn} onPress={handleSequenceAnimation}>
                    <Text style={styles.btnText}>Sequence</Text>
                </Pressable>

                <Pressable style={styles.btn} onPress={handleRepeatAnimation}>
                    <Text style={styles.btnText}>Repeat</Text>
                </Pressable>

                <Pressable style={styles.btn} onPress={handleDelayAnimation}>
                    <Text style={styles.btnText}>Delay</Text>
                </Pressable>

                <Pressable style={styles.btn} onPress={handleResetAnimation}>
                    <Text style={styles.btnText}>Reset</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default ReanimatedTypes;

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

    btnContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        flexWrap: 'wrap',
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
