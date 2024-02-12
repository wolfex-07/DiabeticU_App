import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient'; // or 'react-native-linear-gradient'

function Line() {
  return (
    <View style = {{flexDirection: 'row',alignSelf: 'center',}}>
      <View
        style={{
          backgroundColor: 'grey',
          height: 1,
          width: Dimensions.get('screen').width/2 - 60,
          alignSelf: 'center',
          marginRight: 10,
        }}></View>
      <Text>Or</Text>
      <View
        style={{
          backgroundColor: 'grey',
          height: 1,
          alignSelf: 'center',
          width: Dimensions.get('screen').width/2 - 60,
          marginLeft: 10,
        }}></View>
    </View>
  );
};

export default Line;