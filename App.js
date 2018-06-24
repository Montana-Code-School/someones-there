import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {Text, Button, Avatar } from 'react-native-elements';
import SignUpPage from './Pages/SignUpPage.js';
import SetUpPage from './Pages/SetUpPage.js';
import PreferencesPage from './Pages/PreferencesPage.js';
import LoginPage from './Pages/LoginPage.js';
import DashboardPage from './Pages/DashboardPage.js';
import CrisisPage from './Pages/CrisisPage.js';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './Pages/LandingPage.js';

const RootStack = createStackNavigator(
  {
    Landing: LandingPage,
    SignUp: SignUpPage,
    LogIn: LoginPage,
    SetUp: SetUpPage,
    Dashboard: DashboardPage,
    Crisis: CrisisPage,
    Preferences: PreferencesPage,
  },
  {
    initialRouteName: 'Landing',
    navigationOptions: {
      headerStyle:{
        backgroundColor: "#6d2493"
      },
      headerTintColor: "#ffffff"
      }
  }
);

export default class App extends React.Component{

  render(){
    return <RootStack />;
  }
}
