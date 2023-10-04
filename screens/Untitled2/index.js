import { View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.gxDGZuJn} source={require("./AirPods-Max-Apple-Wireless-Headphones-price-in-Pakistan.jpg")} resizeMode="stretch"><View style={styles.rBOXOwLS}></View></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gxDGZuJn: {
    width: 356,
    height: 639,
    position: "relative",
    left: -7,
    top: -4
  },
  rBOXOwLS: {
    height: 631,
    width: 355,
    backgroundColor: "#FE6344",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.77
  }
});
export default Untitled2;