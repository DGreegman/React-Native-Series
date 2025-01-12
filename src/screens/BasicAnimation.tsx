import {
    Animated,
    Button,
    Easing,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {useRef} from 'react';

const BasicAnimation = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handleFadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const handleFadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const handleTranslate = () => {
        Animated.timing(translateAnim, {
            toValue: 100,
            duration: 1000,
            easing: Easing.bezier(0.25, 0.5, 0.25, 1),
            useNativeDriver: true,
        }).start();
    };

    const handleScale = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 2,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.headerText}>Basic Animation</Text>
                <Text style={styles.headerText}>
                    FadeIn/FadeOut Animation Demo
                </Text>
            </View>

            {/* Fade Animation demo */}
            <View style={styles.demoContainer}>
                <Animated.View
                    style={[
                        styles.box,
                        styles.fadeBox,
                        {opacity: fadeAnim},
                    ]}></Animated.View>
                <View style={styles.buttonContainer}>
                    <Button onPress={handleFadeIn} title="Fade in" />
                    <Button onPress={handleFadeOut} title="Fade Out" />
                </View>
            </View>

            {/* Translate Animation demo */}
            <Text style={styles.headerText}>Translate Animation Demo</Text>
            <View style={styles.demoContainer}>
                <Animated.View
                    style={[
                        styles.box,
                        styles.translateBox,
                        {
                            transform: [
                                {
                                    translateX: translateAnim,
                                },
                            ],
                        },
                    ]}></Animated.View>
                <Button title="Translate" onPress={handleTranslate} />
            </View>

            {/* Scale Animation demo */}
            <Text style={styles.headerText}>Scale Animation Demo</Text>
            <View style={styles.demoContainer}>
                <Animated.View
                    style={[
                        styles.box,
                        styles.scaleBox,
                        {
                            transform: [
                                {
                                    scale: scaleAnim,
                                },
                            ],
                        },
                    ]}></Animated.View>
                <Button title="Scale" onPress={handleScale} />
            </View>
        </ScrollView>
    );
};

export default BasicAnimation;

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
    demoContainer: {
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
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
        backgroundColor: 'red',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    fadeBox: {
        backgroundColor: '#3498db',
    },
    translateBox: {
        backgroundColor: '#ace84b',
    },
    scaleBox: {
        backgroundColor: 'red',
    },
});
