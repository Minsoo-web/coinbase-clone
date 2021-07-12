import React, { useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components";
import style from "../style";

const CreateAccount = props => {
  const { navigation } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.mainView}>
        <View>
          <Text style={style.textStyle}>Create your account</Text>
          <View style={style.setMargin}>
            <Text>First Name</Text>
            <TextInput
              style={style.textInputStyle}
              placeholder="John"
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
          </View>
          <View style={style.setMargin}>
            <Text>Last Name</Text>
            <TextInput
              style={style.textInputStyle}
              placeholder="John"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
          </View>
          <View style={style.setMargin}>
            <Text>Email</Text>
            <TextInput
              style={style.textInputStyle}
              placeholder="John"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={style.setMargin}>
            <Text>Password</Text>
            <TextInput
              style={style.textInputStyle}
              secureTextEntry
              placeholder="******"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={style.section}>
            <Text style={style.textStyle2}>
              I certify that I am 18 years of age or older, and I agree to the
              <TouchableWithoutFeedback onPress={() => console.log("hi")}>
                <Text style={style.linkStyle2}> User Agreement </Text>
              </TouchableWithoutFeedback>
              and
              <TouchableWithoutFeedback onPress={() => console.log("hi")}>
                <Text style={style.linkStyle2}> Privacy Policy</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
        <View style={style.btnView}>
          <Button text="Start" disabled={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
