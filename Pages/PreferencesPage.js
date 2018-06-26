import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
// import Modal from './Components/Modal.js';


 class PreferencesPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Working.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        />
      </View>
    );
  }
}

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default withNavigation(PreferencesPage);
const styles= StyleSheet.create({
  container : {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 25
  }
})
