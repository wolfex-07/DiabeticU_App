import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LaunchScreen } from "./src/screens/launch/index";
import { LandingPage } from "./src/screens/auth/Landing/index";
import createProfile from "./src/screens/UserProfile/SetupProfile/CreateProfile";
// import AppNavigator from "./src/navigations/AppNavigator";

const stack = createNativeStackNavigator();

function DiabeticUApp() {
  return (
   <NavigationContainer>
    <stack.Navigator initialRouteName="LaunchScreen">
     <stack.Screen name = "LaunchScreen" component={LaunchScreen} options={{headerShown:false}}/>
     <stack.Screen name = "LandingPage" component={LandingPage} options={{headerShown:false}}/>
     <stack.Screen name = "CreateProfile" component={createProfile} options={{headerShown:false, contentStyle: {backgroundColor: '#FFFFFF'}}} />
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default DiabeticUApp;
