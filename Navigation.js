import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";


const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}


//Guardar en una variable la funcion del createMaterialBottomTabNavigator
const Tab = createMaterialBottomTabNavigator();

//Traemos en funcion y componentes las screens 
function MyTabs (){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple"
            }}
            >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarBadge: 3,
                    headerShown: false
                }}
                />
            <Tab.Screen name="App Prestamo" 
            component={SettingsScreen}
            
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}