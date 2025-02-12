import {StyleSheet, Pressable, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const ReanimatedForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailShake = useSharedValue(0);
    const passwordShake = useSharedValue(0);
    const passwordCheckMark = useSharedValue(0);
    const emailCheckMark = useSharedValue(0);
    const emailErrorHeight = useSharedValue(0);
    const passwordErrorHeight = useSharedValue(0);

    const validateEmail = (email: string) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!email) {
            setEmailError('Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email Format');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordError('Password Must be set...');
            return false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long...');
            return false;
        }

        setPasswordError('');
        return true;
    };
    const handleChangeEmail = (email: string) => {
        setEmail(email);

        // validate Email

        const isValidEmail = validateEmail(email);
        emailCheckMark.value = withSpring(isValidEmail ? 1 : 0);

        if (!isValidEmail) {
            emailShake.value = withSequence(
                withTiming(-10, {duration: 50}),
                withTiming(10, {duration: 100}),
                withTiming(0, {duration: 50}),
            );

            emailErrorHeight.value = withSpring(20);
        } else {
            emailErrorHeight.value = withSpring(0);
        }
    };

    const handleChangePassword = (password: string) => {
        setPassword(password);

        const isValidPassword = validatePassword(password);

        passwordCheckMark.value = withSpring(isValidPassword ? 1 : 0);

        if (!isValidPassword) {
            passwordShake.value = withSequence(
                withTiming(-10, {duration: 50}),
                withTiming(10, {duration: 100}),
                withTiming(0, {duration: 50}),
            );

            passwordErrorHeight.value = withSpring(20);
        } else {
            passwordErrorHeight.value = withSpring(0);
        }
    };

    const onSubmit = (email: string, password: string) => {};
    const handleFormSubmit = () => {
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);

        if (isValidEmail && isValidPassword) {
            onSubmit(email, password);
            // api call from here or whatever you want to do
        } else {
            if (!isValidEmail) {
                emailShake.value = withSequence(
                    withTiming(-10, {duration: 50}),
                    withTiming(10, {duration: 100}),
                    withTiming(0, {duration: 50}),
                );

                emailErrorHeight.value = withSpring(20);
            }

            if (!isValidPassword) {
                passwordShake.value = withSequence(
                    withTiming(-10, {duration: 50}),
                    withTiming(10, {duration: 100}),
                    withTiming(0, {duration: 50}),
                );

                passwordErrorHeight.value = withSpring(20);
            }
        }
    };

    const emailAnimationStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: emailShake.value,
            },
        ],
    }));

    const passwordAnimationStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: passwordShake.value,
            },
        ],
    }));

    const emailCheckMarkStyle = useAnimatedStyle(() => ({
        opacity: emailCheckMark.value,
        transform: [
            {
                scale: emailCheckMark.value,
            },
            {
                rotate: `${emailCheckMark.value * 360}deg`,
            },
        ],
    }));

    const passwordCheckMarkStyle = useAnimatedStyle(() => ({
        opacity: passwordCheckMark.value,
        transform: [
            {
                scale: passwordCheckMark.value,
            },
            {
                rotate: `${passwordCheckMark.value * 360}deg`,
            },
        ],
    }));

    const emailErrorStyle = useAnimatedStyle(() => ({
        height: emailErrorHeight.value,
        opacity: emailErrorHeight.value === 0 ? 0 : 1,
        transform: [
            {
                translateY: withSpring(emailErrorHeight.value / 2),
            },
        ],
    }));

    const passwordErrorStyle = useAnimatedStyle(() => ({
        height: passwordErrorHeight.value,
        opacity: passwordErrorHeight.value === 0 ? 0 : 1,
        transform: [
            {
                translateY: withSpring(passwordErrorHeight.value / 2),
            },
        ],
    }));
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.inputContainer, emailAnimationStyle]}>
                <TextInput
                    style={[styles.inputComp]}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={handleChangeEmail}
                />

                <Animated.View style={[styles.checkMark, emailCheckMarkStyle]}>
                    <Text style={styles.checkMarkText}></Text>
                </Animated.View>
            </Animated.View>
            <Animated.Text style={[styles.errorText, emailErrorStyle]}>
                {emailError}
            </Animated.Text>

            <Animated.View
                style={[styles.inputContainer, passwordAnimationStyle]}>
                <TextInput
                    style={[styles.inputComp]}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handleChangePassword}
                />

                <Animated.View
                    style={[styles.checkMark, passwordCheckMarkStyle]}>
                    <Text style={styles.checkMarkText}></Text>
                </Animated.View>
            </Animated.View>
            <Animated.Text style={[styles.errorText, passwordErrorStyle]}>
                {passwordError}
            </Animated.Text>

            <Pressable style={[styles.submitButton]} onPress={handleFormSubmit}>
                <Text style={[styles.submitButtonText]}>Submit</Text>
            </Pressable>
        </View>
    );
};

export default ReanimatedForm;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    inputComp: {
        flex: 1,
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: '#fff',
    },

    checkMark: {
        position: 'absolute',
        right: 15,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkMarkText: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    submitButton: {
        backgroundColor: '#2196f3',
        paddingVertical: 12,
        borderRadius: 24,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
