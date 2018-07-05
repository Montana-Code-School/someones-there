import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import {Text, Button, Avatar } from 'react-native-elements';
import  LogoTitle  from './LogoTitle.js';
import { Permissions, Notifications } from 'expo';
import Notification from '../Components/Notification.js'
import registerForPushNotifications from '../Helper/Register.js'



class LandingPage extends React.Component {

  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  componentDidMount() {
    registerForPushNotifications()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
        </View>
        <View style={styles.imageView}>
           <Image
             style={styles.pic}
             source={require('../placement-pictures/navi.png')}
            />
            <Text h3></Text>
            <Text style={styles.taglineStyle}>Always have someone there for you.</Text>
        <View style={styles.buttons}>
            <Button
               buttonStyle = {styles.buttonStyle}
               medium
               rounded
               raised
               icon={{name: 'user-circle', type: 'font-awesome'}}
               title="Create Account"
               color="#FFFFFF"
               backgroundColor="#0b2793"
               accessibilityLabel= "Create Account"
               onPress={ () => this.props.navigation.navigate('SignUp')}
            />
            <Button
               buttonStyle = {styles.buttonStyle}
               rounded
               icon={{name: 'user-circle', type: 'font-awesome'}}
               raised
               title="Log In"
               color="#FFFFFF"
               backgroundColor="#0b2793"
               accessibilityLabel="Log In"
               onPress={ () => this.props.navigation.navigate('LogIn')}
            />
            </View>
          </View>
          <View>
          <Notification />
          </View>
       </ScrollView>
    );
  }
}

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate

export default (LandingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91e4fb',
  },
  titleContainer: {
    justifyContent: 'space-evenly',
    flexDirection: "row",
    margin: 15
},
  pic: {
    height: 270,
    width: 270,
    alignContent: "center",
  },
  imageView:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25
  },
  logo: {
    height: 50,
    width: 50,
  },
  taglineStyle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  }
});
