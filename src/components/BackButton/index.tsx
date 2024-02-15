import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import AppImages from '../../Constants/Images';
import Colors from '../../Constants/Colors';
//import { TouchableOpacity } from "react-native-gesture-handler";

function TopBackButton({tapBack}: {tapBack: any}) {
  function didTapBack() {
    tapBack();
  }

  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.secondary,
        height: 48,
        width: 48,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={didTapBack}>
      <Image
        src={AppImages.backIcon}
        style={{
          height: 12,
          width: 6,
          backgroundColor: Colors.secondary,
          borderRadius: 40,
          padding: 10,
          margin: 20,
        }}></Image>
    </TouchableOpacity>
  );
}
export default TopBackButton;
