import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TutorialView from './TutorialView';
import AppImages from '../../../Constants/Images';
import PrimaryBtn from '../../../components/Button/PrimaryBtn';
import Line from './Line';
import Colors from '../../../Constants/Colors';
import App from './SignUptext';
import PopupView from './popUpView';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.imgLogo} source={AppImages.logo}></Image>
    </View>
  );
};

const LoginSignUpView = ({onLoginWithSocialMediaTapped}: {onLoginWithSocialMediaTapped: any}) => {

  const handleLoginWithSocialMediaPressed = () => {
    console.log('pressed')
  }
  return (
    <View style={{flex: 0.8, backgroundColor: 'white'}}>
      <PrimaryBtn
        onPress={() => {
        }}
        style={{borderWidth: 1, borderColor: 'grey', marginHorizontal: 30, marginVertical: 20}}>
        <Text>Login</Text>
      </PrimaryBtn>
      <Line />
      <PrimaryBtn
        onPress={() => onLoginWithSocialMediaTapped(true)}
        style={{marginHorizontal: 30,  marginVertical: 20}}
        color={Colors.primary}>
        <Text style={{color: 'white'}}>Login with Social Media</Text>
      </PrimaryBtn>
      <App/>

    </View>
  );
};


const LandingPage = () => {
  const [ismodalVisible, setModalVisible] = useState(false)
  const handleTouchCancel = (arg: boolean) => {
      setModalVisible(false)
  }

  const handleLoginTapped = (arg: boolean) => {
      setModalVisible(true)
  }
  
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header />
      <TutorialView />
      <LoginSignUpView  onLoginWithSocialMediaTapped = {handleLoginTapped}/>
      <PopupView modalVisible={ismodalVisible} onTouchCancel={handleTouchCancel}/>
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
  },
});
