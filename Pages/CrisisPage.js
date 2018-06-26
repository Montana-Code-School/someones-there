import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class CrisisPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Someones There</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        />
      </View>
    );
  }
}

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default withNavigation(CrisisPage);
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
