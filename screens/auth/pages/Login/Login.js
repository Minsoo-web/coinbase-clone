import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../../../components";

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Sign in to Coinbase</Text>
        </View>
        <View>
          <Button text="Sign in" disabled={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
