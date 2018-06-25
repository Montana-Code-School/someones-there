import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';

 class PreferencesPage extends React.Component {
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

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default withNavigation(PreferencesPage);
