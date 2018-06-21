import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';



export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Someones There</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
           title="Create Account"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
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
    initialRouteName: 'Landing',
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91e4fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
