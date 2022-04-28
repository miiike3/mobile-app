import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
} from "react-native";

export default function WelcomePage({navigation}) {
    return (
    <View>
        <Button
        title = "Login"
        onPress={() =>
            navigation.navigate('Auth', {screen: 'Login'})}
        />
        <Button
        title = "Register"
        onPress={() =>
            navigation.navigate('Auth', {screen: 'Register'})}
        />
    </View>
    );
};
