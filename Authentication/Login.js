import { StatusBar } from "expo-status-bar";
import React, { useState, createRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    AsyncStorage,
} from "react-native";
import axios from "axios";
import jwt from 'jwt-decode';

export default function Login({navigation}) {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState('false');

    const usernameInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmitButton = () => {
    setErrortext('');
    if (!Username) {
        alert('Enter a username');
    }
    if (!Password) {
        alert('Enter a password');
    }
    var item = {
        "username": Username,
        "password": Password,
    }
    axios.post("http://localhost:8000/api/token/", item)
    .then((res) => {
        let token = jwt(res.data.access)
        let stringid = token.user_id
        AsyncStorage.setItem('user_id', stringid.toString())
        AsyncStorage.setItem('username', Username)
        alert("Login Successful.");
        navigation.navigate('Tab')
    })
    .catch((error) => {
        console.error(error)
        alert("Login Unsuccessful")
        navigation.navigate('Welcome')

    })
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