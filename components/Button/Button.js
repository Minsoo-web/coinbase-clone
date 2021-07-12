import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import style from "./style";

const Button = props => {
  const { text, icon, disabled, onPress, btnStyle, btnTextStyle } = props;
  return (
    <TouchableOpacity
      style={[style.btnContainer, btnStyle]}
      activeOpacity={0.5}
      disabled={disabled}
      onPress={onPress}
    >
      {text && (
        <Text style={[style.btnText, btnTextStyle, { marginRight: icon ? 10 : 0 }]}>{text}</Text>
      )}
      {icon && <Image style={style.iconStyle} source={{ uri: icon }} resizeMode="contain" />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
