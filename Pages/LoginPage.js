import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text, Button, Avatar } from 'react-native-elements';

class LogInPage extends React.Component {
  static navigationOptions = {
    title: "Login Page",
  };
  render() {
    return (

      <View>
        <Text >Someones There</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
           title="Create Account"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

export default withNavigation(LogInPage);
