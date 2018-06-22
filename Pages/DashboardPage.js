import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


export default class DashboardPage extends React.Component {
  render() {
    return (

      <View>
        <Text>Someones There</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
           title="Create Account"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
           onPress={ () => console.log("meow")}
        />
      </View>
    );
  }
}
