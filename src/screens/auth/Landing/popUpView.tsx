import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import TouchableOpacityWithImage from "../../../components/TouchableWithImage";
import Modal from "react-native-modal";
import AppImages from "../../../Constants/Images";
import { H1 } from "../../../components/TextComponent";

function PopupView({modalVisible, onTouchCancel}: {modalVisible: boolean, onTouchCancel: any}) {
    //const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
       onTouchCancel(false)
    };

    return (
        <View>
            <Modal
                style={{ marginLeft: 0, width: Dimensions.get('window').width, marginBottom: 0 }}
                isVisible={modalVisible}
                onTouchCancel={toggleModal}
                animationInTiming={1000}
                onBackButtonPress={toggleModal}
                onBackdropPress={toggleModal}
                animationIn={'bounceInUp'}
                onSwipeComplete={() => onTouchCancel(false)}>
                <View style={styles.bottomModal}>
                    <View style={{ margin: 30, flex: 1, flexDirection: 'column' }}>
                        <H1 style={styles.socialHeading}>Login with Social Media</H1>
                        <TouchableOpacityWithImage
                            {...styles.socialMediaTouchable}
                            children={'Login with Google'}
                            imageSource={AppImages.googleIcon}
                            imageStyle={styles.socialIcons}
                            isImageLeft={true}
                            textStyle={styles.socialloginTouchableTitle}
                            onPress={() => {
                                console.log('tapped')
                            }}
                        ></TouchableOpacityWithImage>
                        <TouchableOpacityWithImage
                            {...styles.socialMediaTouchable}
                            children={'Login with Facebook'}
                            imageSource={AppImages.fbIcon}
                            imageStyle={styles.socialIcons}
                            isImageLeft={true}
                            textStyle={styles.socialloginTouchableTitle}
                            onPress={() => {
                                console.log('tapped')
                            }}
                        ></TouchableOpacityWithImage>
                        <TouchableOpacityWithImage
                            {...styles.socialMediaTouchable}
                            children={'Login with Apple'}
                            imageSource={AppImages.appleIcon}
                            imageStyle={styles.socialIcons}
                            isImageLeft={true}
                            textStyle={styles.socialloginTouchableTitle}
                            onPress={() => {
                                console.log('tapped')
                            }}
                        ></TouchableOpacityWithImage>
                    </View>
                </View>
            </Modal>
        </View >
    );
};

export default PopupView;

const styles = StyleSheet.create({
    bottomModal: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: Dimensions.get('window').height / 2.1,
        bottom: 0,
        borderTopStartRadius: 35,
        borderTopEndRadius: 35,
    },

    socialHeading: {
        marginBottom: 32,
        color: '#0B152D',
    },

    socialMediaTouchable: {
        borderRadius: 16,
        height: 80,
        width: Dimensions.get('window').width - 60,
        backgroundColor: '#F6F9FA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    socialloginTouchableTitle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 36,
    },

    socialIcons: {
        aspectRatio: 70 / 70,
        marginLeft: 0,

    },
})

