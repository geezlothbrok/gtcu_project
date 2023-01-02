import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Login";
import Register from "../Register";
import Home from "../Home"
import Catalog from "../Catalog";
import Maths from "../Maths";
import ComputerScience from "../ComputerScience";
import Engineering from "../Engineering";
import Science from "../Science";
import BottomTabNavigator from "./DrawNavigator";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options = {{
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
        headerShown: false
       }}/>


      <Stack.Screen name="Home" component={BottomTabNavigator}  options = {{
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
        headerShown: false
       }}  />
      <Stack.Screen name="Register" component={Register}  options = {{
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
        headerShown: false
       }}/>
      <Stack.Screen name="Catalog" component={Catalog} />
      {/* <Stack.Screen name="geez" component={BottomTabNavigator} /> */}
      <Stack.Screen name="Mathematics" component={Maths} options = {{
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
       }} />
      <Stack.Screen name="Computer Science" component={ComputerScience} options = {{
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
       }} />
      <Stack.Screen name="Engineering" component={Engineering} options={{
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
        headerBackTitleVisible: false
      }}/>
      <Stack.Screen name="Science" component={Science} options = {{
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

      
    </Stack.Navigator>
  );
}

// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator >
//      <BottomTabNavigator />
//     </Stack.Navigator>
//   );
// }

 export  {MainStackNavigator}