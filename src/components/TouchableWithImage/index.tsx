import React from "react";
import { TouchableWithImageProp } from "./@types/@index";
import { Image, TouchableOpacity } from "react-native";
import { H1 } from "../TextComponent";

const TouchableOpacityWithImage = (props: TouchableWithImageProp) => {

    const {
        children,
        imageSource,
        imageStyle,
        isImageLeft,
        textStyle,
        onPress,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[props, { flexDirection: !isImageLeft ? 'row' : 'row-reverse', flex: 1, justifyContent: 'space-around',alignItems: 'center'}]}>
                <H1 style={[textStyle, {textAlign: 'left', flex: 1}]}>{children}</H1>
            <Image source={imageSource} style={[imageStyle, { width: 30, height: 30, flex: 0.1, marginLeft: 30}]}></Image>
        </TouchableOpacity>
    );

};

export default TouchableOpacityWithImage;