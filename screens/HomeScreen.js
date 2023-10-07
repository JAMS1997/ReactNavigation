import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity as RNTouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StackScreen from './StackScreen';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{
        uri:
          "https://content.wepik.com/statics/134527243/preview-page0.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Integrantes</Text>
        <Text style={styles.membersText}>
          {"\n"}
          Juan Zapata
          {"\n"}
          Alejandro Melendez
          {"\n"}
          Victor Garcia
        </Text>
        <RNTouchableOpacity
          onPress={() => navigation.navigate("Stack")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Funcion StackScreen</Text>
        </RNTouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  membersText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});

export default HomeScreen;