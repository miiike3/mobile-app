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
import axios from 'axios';

export default function Signup({navigation}) {
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
        alert('Enter a password')
    }
    var item = {
        "username": Username,
        "password": Password,
    }

    axios.post("http://localhost:8000/api/register/", item)
    .then((res) => {
        alert("Registration Successful.")
        navigation.navigate('Auth', {screen: 'Login'})
    })
    .catch((error) => {
        console.error(error)
        alert("Registration Unsuccessful")
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



