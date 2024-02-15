import React, { useState } from 'react';
import { TextInput, StyleSheet, View , TextInputProps, Image} from 'react-native';
import Colors from '../../Constants/Colors';
import AppImages from '../../Constants/Images';

type CustomTextInputProps = {
    placeholder?: string;
    style?: any;
    image?: any;
  } & TextInputProps;
  
const CustomTextInput: React.FC<CustomTextInputProps> = ({ image, placeholder, onChangeText, style, ...restProps }) => {
  const [isFocused, setIsFocused] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, isFocused && styles.focusedInput]}
        {...restProps}
      />
      <Image source = {image} style = {{height: 20, width: 20, resizeMode: 'contain', alignSelf: 'center'}}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    height: 60,
    flexDirection: 'row',
    borderColor: '#E7EBF3',
   // paddingBottom: 0,
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 30,
    //justifyContent: 'space-between',
  },
  input: {
    fontSize: 14,
    fontWeight: '200',
    backgroundColor: 'white',
    flex: 2,
    overflow: 'hidden',
  },
  focusedInput: {
    borderBottomColor: 'blue',
  },
});

export default CustomTextInput;
