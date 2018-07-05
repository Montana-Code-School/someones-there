import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ModalExample from '../Components/Modal.js';


class HelpPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ModalExample />
        <Text style={styles.title}>Someones There</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        />
      </View>
    );
  }
}

export default (HelpPage);
const styles= StyleSheet.create({
  container : {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 25
  },
  text: {
     color: '#3f2949',
     marginTop: 10,
     fontSize: 20
  }
})
