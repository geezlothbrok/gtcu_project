// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';


import Catalog from './src/screens/Catalog';
import ComputerScience from './src/screens/ComputerScience';
import Engineering from './src/screens/Engineering';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Maths from './src/screens/Maths';
import MyCourse from './src/screens/MyCourse';
import MyProfile from './src/screens/MyProfile';
import Register from './src/screens/Register';
import Science from './src/screens/Science';
import Search from './src/screens/Search';
import {ContactStackNavigator, MainStackNavigator} from './src/screens/navigation/MyStack';
import BottomTabNavigator from './src/screens/navigation/DrawNavigator';






export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
      
    </NavigationContainer>
  );
}


