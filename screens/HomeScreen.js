import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity as RNTouchableOpacity } from "react-native";
import { TouchableOpacity as WebTouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {

    const navigation=useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >HomeScreen</Text>
            <RNTouchableOpacity
                onPress={()=>navigation.navigate("Stack")}
                style={{
                    backgroundColor:"purple",
                    padding:10,
                    marginTop:"20%",
                    width:"50%",
                    alignSelf:"center",
                    borderRadius:10
                }}
            >
                <Text
                    style={{
                        fontSize:15,
                        textAlign:"center",
                        color:"white",
                    }}
                    >Go to StackScreen</Text>
            </RNTouchableOpacity>
        </View>
    );
}

export default HomeScreen;
