import * as React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import AddSong from './Functions/AddSong';
import EditSong from './Functions/EditSong';
import RateSong from './Functions/RateSong';

const Tab = createBottomTabNavigator();
export default function TabPage() {
    return (
            <Tab.Navigator>
                <Tab.Screen name = "AddSong" component = {AddSong} />
                <Tab.Screen name = "RateSong" component = {RateSong} />
                <Tab.Screen name = "EditSong" component = {EditSong} />
            </Tab.Navigator>
    )
}