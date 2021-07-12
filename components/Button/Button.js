import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Button = props => {
  const { text, icon, disable } = props;
  return (
    <TouchableOpacity activeOpacity={0.5}>
      {text && <Text>{text}</Text>}
      {icon && <Image source={{ uri: icon }} resizeMode="contain" />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
