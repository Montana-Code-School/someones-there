import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ModalExample from '../Components/Modal.js';


 class PreferencesPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ModalExample />
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
export default (PreferencesPage);
const styles= StyleSheet.create({
  container : {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 25
  }
})
