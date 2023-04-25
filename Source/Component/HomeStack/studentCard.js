import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Image } from "expo-image";

//styles
import StartupStyles from "../../Styles/AuthStack/StartupStyles";
import { Avatar } from "react-native-paper";

const StudentCard = (props) => {
  // console.log(props.data);
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    width: "100%",
    border: "1px solid #DDE2E5",
  },
});

