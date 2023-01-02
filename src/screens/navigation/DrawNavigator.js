import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "../navigation/MyStack";
import Search from "../Search";
import MyProfile from "../MyProfile";
import Catalog from "../Catalog";
import Home from "../Home";
import MyCourse from "../MyCourse";

const Drawer = createDrawerNavigator();

const BottomTabNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options = {{
        headerStyle: {
          backgroundColor: '#2B1F68'
        },
        headerTintColor: '#FBFCC8',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          textTransform: 'uppercase'
        },
        headerBackTitle: false,
        headerBackTitleVisible: false,
        // headerShown: false
       }}/>
      <Drawer.Screen name="Catalog" component={Catalog} options = {{
        headerStyle: {
          backgroundColor: '#2B1F68'
        },
        headerTintColor: '#FBFCC8',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          textTransform: 'uppercase'
        },
        headerBackTitle: false,
        headerBackTitleVisible: false,
        // headerShown: false
       }}/>
      <Drawer.Screen name="My Course" component={MyCourse} options = {{
        headerStyle: {
          backgroundColor: '#2B1F68'
        },
        headerTintColor: '#FBFCC8',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          textTransform: 'uppercase'
        },
        headerBackTitle: false,
        headerBackTitleVisible: false,
        // headerShown: false
       }}/>
      <Drawer.Screen name="Search" component={Search} options = {{
        headerStyle: {
          backgroundColor: '#2B1F68'
        },
        headerTintColor: '#FBFCC8',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          textTransform: 'uppercase'
        },
        headerBackTitle: false,
        headerBackTitleVisible: false,
        // headerShown: false
       }}/>
      <Drawer.Screen name="Profile" component={MyProfile} options = {{
        headerStyle: {
          backgroundColor: '#2B1F68'
        },
        headerTintColor: '#FBFCC8',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          textTransform: 'uppercase'
        },
        headerBackTitle: false,
        headerBackTitleVisible: false,
        // headerShown: false
       }}/>
    </Drawer.Navigator>
  );
};

export default BottomTabNavigator;