import * as React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import WelcomePage from './Authentication/WelcomePage';
import TabPage from './TabPage'

const Stack = createStackNavigator();

const Auth = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
        />
      </Stack.Navigator>
  );
};

const app = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="WelcomePage">
      <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ title: "M and M Music Reviews" }}
      />
      <Stack.Screen
        name = "Auth"
        component = {Auth}
      />
      <Stack.Screen
        name = "Tab"
        component = {TabPage}
        options = {{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default app;