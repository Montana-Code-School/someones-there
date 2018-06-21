import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {Text, Button, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import  LogoTitle  from './LogoTitle.js';

class LandingPage extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Avatar
          medium
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
      />
      <Text style={styles.title} h1>Hygge</Text>
    </View>
      <View style={styles.imageView}>
       <Image  style={styles.pic}source={require('../placement-pictures/pug.jpg')} />
        <Text h3>Meow</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <View style={styles.buttons}>
        <Button
           rounded
           raised
           title="Create Account"
           color="#FFFFFF"
           backgroundColor="#0b2793"
           accessibilityLabel="Learn more about this purple button"
           onPress={ () =>
           this.props.navigation.navigate('SignUp')
         }

        />
        <Button
           rounded
           raised
           title="Log In"
           color="#FFFFFF"
           backgroundColor="#0b2793"
           accessibilityLabel="Learn more about this purple button"
           onPress={ () =>
           this.props.navigation.navigate('LogIn')
         }
        />
        </View>
      </View>
   </View>
    );
  }
}

export default withNavigation(LandingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91e4fb',
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: "row",
    padding: 30
},
disciption: {

},
  title: {
    fontWeight: "bold",
  },
  pic: {
    height: 200,
    width: 200,
    alignContent: "center"
  },
  imageView:{
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
});
