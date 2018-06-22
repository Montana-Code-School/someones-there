import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {Text, Button, Avatar } from 'react-native-elements';
import SignUpPage from './Pages/SignUpPage.js';
import SetUpPage from './Pages/SetUpPage.js';
import PreferencesPage from './Pages/PreferencesPage.js';
import LogInPage from './Pages/LogInPage.js';
import DashboardPage from './Pages/DashboardPage.js';
import CrisisPage from './Pages/CrisisPage.js';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './Pages/LandingPage.js';

const RootStack = createStackNavigator(
  // Creating the navigation for our application
  {
    Landing: LandingPage,
    SignUp: SignUpPage,
    LogIn: LogInPage,
    SetUp: SetUpPage,
    Dashboard: DashboardPage,
    Crisis: CrisisPage,
    Preferences: PreferencesPage,
  },
  {
    //Setting the initial route for our application
    initialRouteName: 'Landing',
    navigationOptions: {
    headerStyle:{
    //setting the purple color of the nav bar
        backgroundColor: "#6d2493"
      },
    //setting the title and arrow color in the nav bar
    headerTintColor: "#ffffff"
      }
  }
);

export default class App extends React.Component{
//Rendering the rootstack which is setting our navigation
  render(){
    return <RootStack />;
  }
}
