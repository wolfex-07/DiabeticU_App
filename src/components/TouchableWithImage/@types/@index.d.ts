import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";

export interface TouchableWithImageProp extends TouchableOpacityProps, ViewStyle {
    children: ReactNode;
    imageSource: ImageSourcePropType;
    imageStyle?: ImageStyle;
    buttonStyle?: ViewStyle;
    isImageLeft: Boolean;
    textStyle: TextStyle;
    disabled?: boolean;
    onPress?: () => void;
}