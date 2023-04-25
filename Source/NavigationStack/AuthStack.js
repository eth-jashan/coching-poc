import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import StartupScreen from "../Screens/AuthStack/startup-screen";

import HomeScreen from "../Screens/HomeStack/home-screen";


import AuthScreen from "../Screens/AuthStack/signup-screen";

const AuthFlow = createStackNavigator();


const AuthStack = () => (
  <AuthFlow.Navigator
    initialRouteName={"startupScreen"}
    screenOptions={{ headerShown: false }}
  >
    {/* <AuthScreen.Screen name={"startupScreen"} component={StartupScreen} /> */}
    <AuthFlow.Screen name={"authScreen"} component={HomeScreen} />
  </AuthFlow.Navigator>
);

export default AuthStack;
