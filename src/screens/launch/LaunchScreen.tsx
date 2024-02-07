// /src/screens/launch/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { LandingPage } from '../auth/Landing/index';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppImages from '../../Constants/Images';


const LaunchBackGround = () => {
    return (
        <ImageBackground  style = {{height: '100%', width: '100%'}} source={AppImages.splash}/>
    );
}

const LaunchScreen = ({navigation}: {navigation: any}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LandingPage')
        }, 5000);
     }, []); 

     return (
        <LaunchBackGround/>
     )
};

export default LaunchScreen;
