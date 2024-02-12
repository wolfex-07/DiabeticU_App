import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle, StyleSheet } from 'react-native';

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  color?: string;
  style?: ViewStyle;
}

const PrimaryBtn: React.FC<CustomTouchableOpacityProps> = ({ color, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.touchableOpacity, { backgroundColor: color }, style]} {...rest}>
      {rest.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    //paddingVertical: 20,
    height: 55,
    // paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PrimaryBtn;
