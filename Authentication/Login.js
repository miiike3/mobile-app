import { StatusBar } from "expo-status-bar";
import React, { useState, createRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
} from "react-native";

export default function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState('false');

    const usernameInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmitButton = () => {
        setErrortext('');
        if (!username) {
            alert('Enter a username');
        }
        if (!password) {
            alert('Enter a password')
        }
        navigation.navigate('Tab')
    };

    return (
    <View>
        <TextInput
        style={{
            borderColor: "gray",
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            fontSize: 25,
            }}
        onChangeText={(username) => setUsername(username)}
        placeholder = "text"
        />
        <TextInput
        style={{
            borderColor: "gray",
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            fontSize: 25,
            }}
        onChangeText={(password) => setPassword(password)}
        placeholder = "text"
        />
        <Button
        title = "Submit"
        onPress = {handleSubmitButton}
        />

    </View>
    );

};