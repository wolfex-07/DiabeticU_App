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
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.imgLogo} source={AppImages.logo}></Image>
    </View>
  );
};

const LoginSignUpView = ({onLoginWithSocialMediaTapped, _navigation}: {onLoginWithSocialMediaTapped: any, _navigation: any}) => {

  const handleLoginWithSocialMediaPressed = () => {
    console.log('pressed')
  }

  console.log('navigaton', _navigation);

  return (
    <View style={{flex: 0.8, backgroundColor: 'white'}}>
      <PrimaryBtn
        onPress={() => {
          _navigation?.navigate('CreateProfile')
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


const LandingPage = ({navigation}: {navigation: any}) => {
  const [ismodalVisible, setModalVisible] = useState(false)
  // const navigation = useNavigation<any>();

  const handleTouchCancel = () => {
      setModalVisible(false)
  }

  const handleLoginTapped = () => {
      setModalVisible(true)
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header/>
      <TutorialView/>
      <LoginSignUpView _navigation={navigation} onLoginWithSocialMediaTapped = {handleLoginTapped}/>
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
