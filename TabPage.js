import * as React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import AddSong from './Functions/AddSong';
import EditSong from './Functions/EditSong';
import RateSong from './Functions/RateSong';
import SongList from './Functions/songlist';

const Tab = createBottomTabNavigator();
export default function TabPage() {
    return (
            <Tab.Navigator>
                <Tab.Screen name = "Song List" component = {SongList} />
                <Tab.Screen name = "Add Song" component = {AddSong} />
                <Tab.Screen name = "Rate Song" component = {RateSong} />
                <Tab.Screen name = "Edit/Delete Song" component = {EditSong} />
            </Tab.Navigator>
    )
}