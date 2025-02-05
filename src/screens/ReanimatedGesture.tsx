import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

type ContextType = {
    startX: number;
    startY: number;
};
const ReanimatedGesture = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        ContextType
    >({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.startX + event.translationX;
            translateY.value = ctx.startY + event.translationY;
        },
        onEnd: () => {
            translateX.value = withSpring(0);
            translateY.value = withSpring(0);
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value},
            ],
        };
    });
    return (
        <GestureHandlerRootView style={styles.container}>
            <View>
                <Text style={styles.headerText}>ReanimatedGesture</Text>
                <Text>Drag the below box and release it</Text>
            </View>
            <PanGestureHandler onGestureEvent={panGestureHandler}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

export default ReanimatedGesture;

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
        borderRadius: 18,
        marginTop: 20,
    },
});
