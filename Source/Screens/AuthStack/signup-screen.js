import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
// import { Button } from "react-native-paper";
import constants from "../../Constants/styles";

const{width,height} = Dimensions.get('window')


const LoginScreen = () => {

  return (
    <View style={{ backgroundColor: constants.colors.startup, flex: 1 }}>
    </View>
  );
};


export default LoginScreen;
