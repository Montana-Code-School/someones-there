import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import {Text, Button, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import  LogoTitle  from './LogoTitle.js';

class LandingPage extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
  <ScrollView style={styles.container}>
    <View style={styles.titleContainer}>
      <Image
        style={styles.logo}
        source={require('../placement-pictures/coffeeLove.png')}
        />
        <Text style={styles.title} h1>Nevaeh</Text>
    </View>
    <View style={styles.imageView}>
       <Image
            style={styles.pic}
            source={require('../placement-pictures/pug.jpg')}
        />
        <Text h3></Text>
        <Text>Dont have an account yet? Hit create account</Text>
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
           onPress={ () => this.props.navigation.navigate('LogIn')}
        />
        </View>
      </View>
   </ScrollView>
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
    justifyContent: 'space-evenly',
    flexDirection: "row",
    padding: 15,
    margin: 15
},
  pic: {
    height: 270,
    width: 270,
    alignContent: "center",
    paddingBottom: 15
  },
  imageView:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    height: 50,
    width: 50,
  },
  title: {
    fontFamily: "Monospace"
  }
});
