import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class PreferencesPage extends React.Component {
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
