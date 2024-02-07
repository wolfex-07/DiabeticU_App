import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TutorialView from './TutorialView';
import AppImages from '../../../Constants/Images';

const Header = () => {
  return (
    <View style = {styles.header}>
      <Image style = {styles.imgLogo} source={AppImages.logo}></Image>
    </View>
  );
};

const LoginSignUpView = () => {
    return <View style = {{flex: 0.8, backgroundColor: 'white'}}
    ></View>
}

const LandingPage = () => {
  return (
    <SafeAreaView style = {{backgroundColor: 'white', flex: 1}}>
        <Header />
        <TutorialView/>
        <LoginSignUpView/>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  header: {
    flex: 0.3,
  },
  imgLogo: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
});
