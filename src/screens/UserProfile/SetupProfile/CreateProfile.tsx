import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {create} from 'react-test-renderer';
import TopBackButton from '../../../components/BackButton';
import {H1, Paragraph, H2} from '../../../components/TextComponent';
import Colors from '../../../Constants/Colors';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import AppImages from '../../../Constants/Images';
import {
  HighlightText,
  ParagraphMini,
} from '../../../components/TextComponent/Text';
import CustomTextInput from '../../../components/Input/CustomInput';
import PrimaryBtn from '../../../components/Button/PrimaryBtn';
import AnimatedTextInput from '../../../components/Input/movingInput';
import CustomTextInput2 from '../../../components/Input/movingInput';
import MovingInput from '../../../components/Input/movingInput';

const Header = () => {
  const handleTapBack = () => {
    console.log('tap back pressed.');
  };

  return (
    <View style={{backgroundColor: 'white', marginTop: 20}}>
      <TopBackButton tapBack={handleTapBack} />
    </View>
  );
};

const SubHeader = () => {
  return (
    <View style={{backgroundColor: 'white', marginTop: 30}}>
      <H1 style={{textAlign: 'left'}}>Setup Profile</H1>
      <Paragraph style={{textAlign: 'left', color: Colors.text2}}>
        Complete your profile to unlock the full potential of the app and
        personalize your experience
      </Paragraph>
    </View>
  );
};

const ProfilePicUpload = () => {
  const handlePicUpload = () => {};

  return (
    <View
      style={{backgroundColor: 'white', marginTop: 0, flexDirection: 'row'}}>
      <Image
        source={AppImages.profiledefault}
        style={{
          height: 145,
          width: 145,
          margin: 0,
          backgroundColor: 'white',
        }}></Image>
      <View style={{justifyContent: 'center'}}>
        <ParagraphMini
          style={{textAlign: 'left', marginBottom: 4, color: '#4B5879'}}>
          Profile Picture
        </ParagraphMini>
        <TouchableOpacity onPress={handlePicUpload}>
          <HighlightText style={{textAlign: 'left'}}>
            Upload Picture
          </HighlightText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Form = () => {
  return (
    <View style={{backgroundColor: 'white', marginTop: 20, height: 100}}>
      <MovingInput/>
      <CustomTextInput placeholder="Username" image={AppImages.checkIcon} placeholderTextColor={'#4F535E'}/>
      <CustomTextInput placeholder="BirthDay" image={AppImages.calendarIcon}  placeholderTextColor={'#4F535E'}/>
      <CustomTextInput placeholder="Gender" image={AppImages.downArrow}  placeholderTextColor={'#4F535E'}/>
      <CustomTextInput placeholder="ReferralCode(Optional)" image={''}  placeholderTextColor={'#4F535E'}/>
    </View>
  );
};

const SubmitBtn = () => {
  const handleSubmit = () => {};
  return (
    <PrimaryBtn
      onPress={() => {
        handleSubmit;
      }}
      style={{marginVertical: 10}}
      color={Colors.primary}>
      <Text style={{color: 'white'}}>Submit</Text>
    </PrimaryBtn>
  );
};

const CreateProfile = ({navigation}: {navigation: any}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <Header />
          <SubHeader />
          <ProfilePicUpload />
          <Form />
        </ScrollView>
        <SubmitBtn />
      </SafeAreaView>
    </>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 180, // Adjust this value as needed to create space at the bottom
  },
});
