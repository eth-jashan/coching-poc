import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet,Image, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { response } from "../../../sampleData";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "@rneui/themed";
import { Button } from "@rneui/base";
// import studentCard from "../../Component/HomeStack/studentCard";
// import StudentCard from "../../Component/HomeStack/studentCard";


const HomeScreen = () => {
  const user = useSelector((state) => state.auth.user);

  const age=(birthdate)=> {
    const date = birthdate.split("/");
    const formatedDated = new Date(date[2], date[1], date[0]); 
    const today = new Date();
    const age =
      today.getFullYear() -
      formatedDated.getFullYear() -
      (today.getMonth() < formatedDated.getMonth() ||
        (today.getMonth() === formatedDated.getMonth() &&
          today.getDate() < formatedDated.getDate()));
    return age;
  }

  const differenceInDays = (d1) => {
    const date1 = new Date();
    const date = d1.split("/");
    const formatedDated = new Date(date[2], date[1], date[0]); 
    console.log(date1, formatedDated, d1);
    const diffTime = Math.abs(formatedDated - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
  }

  const StudentCard = ({ title, dob, gender, batch, expiryDate }) => (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.cardAvatar}
          source={{
            uri: (src =
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
          }}
        />
        <View>
          <Text style={styles.cardTitle}>{title || "No Name"}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.cardTitle}>{age(dob)} years</Text>
            <Foundation
              style={{ marginLeft: 6 }}
              name={gender === "male" ? "male-symbol" : "female-symbol"}
              size={24}
              color={gender === "male" ? "#0287FF" : "#BB3D6D"}
            />
          </View>
          <Text style={styles.expiryMessage}>
            expiring in {differenceInDays(expiryDate)} days
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            style={{ flexDirection: "row" }}
          >
            {batch.includes("6am-9am") && (
              <View
                style={{
                  padding: 4,
                  borderWidth: 1,
                  borderColor: "#EBA92B",
                  flexDirection: "row",
                  marginLeft: 12,
                  borderRadius: 12,
                }}
              >
                <Text style={styles.batchTitle}>6am-9am</Text>
                <Feather name="sunrise" size={12} color="#EBA92B" />
              </View>
            )}
            {batch.includes("4pm-6pm") && (
              <View
                style={{
                  padding: 4,
                  borderWidth: 1,
                  borderColor: "#D95E16",
                  flexDirection: "row",
                  marginLeft: 12,
                  borderRadius: 12,
                }}
              >
                <Text style={(styles.batchTitle, { color: "#D95E16" })}>
                  4pm-6pm
                </Text>
                <Feather name="sunset" size={12} color="#D95E16" />
              </View>
            )}
            {batch.includes("6pm-8pm") && (
              <View
                style={{
                  padding: 4,
                  borderWidth: 1,
                  borderColor: "#EBA92B",
                  flexDirection: "row",
                  marginLeft: 12,
                  borderRadius: 12,
                }}
              >
                <Text style={styles.batchTitle}>6pm-8pm</Text>
                <Feather name="sunrise" size={12} color="#EBA92B" />
              </View>
            )}
          </ScrollView>
          {/* */}
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome name="whatsapp" size={24} color="#23D366" />
        <Ionicons
          style={{ marginLeft: 6 }}
          name="call-outline"
          size={24}
          color="#0287FF"
        />
      </View>
    </View>
  );

  const FloatingButton = () => (
    <View style={styles.floatingButton}>

    </View>
  )
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Students List</Text>
      <SearchBar
        placeholder="Search name"
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        platform="android"
        containerStyle={{ height: 40 }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={response}
        style={{ marginTop: 12 }}
        renderItem={({ item }) => (
          <StudentCard
            expiryDate={item.expiryDate}
            batch={item.batches}
            gender={item.gender}
            title={item?.name}
            dob={item?.DOB}
          />
        )}
      />
      <FloatingButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    fontFamily: "bold",
    fontSize: 36,
    color: "black",
    marginLeft: 12,
  },
  cardContainer: {
    padding: 8,
    width: "100%",
    borderColor: "#DDE2E5",
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardTitle: {
    fontFamily: "medium",
    fontSize: 18,
    color: "black",
    marginLeft: 12,
  },
  expiryMessage: {
    fontFamily: "medium",
    fontSize: 12,
    color: "red",
    marginLeft: 8,
    marginVertical:8
  },
  batchTitle: {
    fontFamily: "medium",
    fontSize: 12,
    color: "#EBA92B",
    marginRight: 8,
  },
  floatingButton: {
    width: 50,
    height: 50,
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#0287FF",
    right: 12,
    bottom: 20,
  },
});

export default HomeScreen;

