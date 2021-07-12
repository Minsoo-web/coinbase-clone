import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components";
import style from "../style";

const Login = props => {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.mainView}>
        <View>
          <Text style={style.textStyle}>Sign in to Coinbase</Text>
          <View style={style.setMargin}>
            <Text style={style.textStyle1}>Email</Text>
            <TextInput
              style={style.textInputStyle}
              placeholder="exmple@email.com"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={style.setMargin}>
            <Text style={style.textStyle1}>Password</Text>
            <TextInput
              style={style.textInputStyle}
              placeholder="******"
              value={password}
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={style.flexRowView}>
            <TouchableOpacity style={style.linkStyle} activeOpacity={0.5}>
              <Text>Forgot password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.linkStyle} activeOpacity={0.5}>
              <Text>Privacy policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.btnView}>
          <Button text="Sign in" disabled={false} onPress={() => navigation.navigate("Home")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
