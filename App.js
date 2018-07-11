import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import SignUpPage from './Pages/SignUpPage.js';
import SetUpPage from './Pages/SetUpPage.js';
import PreferencesPage from './Pages/PreferencesPage.js';
import LoginPage from './Pages/LoginPage.js';
import DashboardPage from './Pages/DashboardPage.js';
import HelpPage from './Pages/HelpPage.js';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './Pages/LandingPage.js';
import ModalExample from './Components/Modal.js';
import Expo from 'expo';
const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `http://pure-ridge-12887.herokuapp.com/api/users`

const RootStack = createStackNavigator(
  {
    Landing: LandingPage,
    SignUp: SignUpPage,
    LogIn: LoginPage,
    SetUp: SetUpPage,
    Dashboard: DashboardPage,
    Help: HelpPage,
    Preferences: PreferencesPage,
  },
  {
    initialRouteName: 'Landing',
    headerMode: "none",
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
    return <RootStack /> ;
  }
}
