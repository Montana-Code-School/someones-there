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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      notification: null,
      title: "hello",
      body: "say something"
    };
    this.initialRegister = this.initialRegister.bind(this)
  }

  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  async initialRegister() {
     const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
     if (status !== 'granted') {
       const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
       if (status !== 'granted') {
         return;
       }
     }

     const token = await Notifications.getExpoPushTokenAsync();
     this.subscription = Notifications.addListener(this.handleNotification);
     console.log('token', token);

    this.setState({
      token
    });
  }

  handleNotification = notification => {
    this.setState({
      notification,
    });
  };

  componentDidMount() {
    this.initialRegister()
    console.log(this.state.token, "this.state.token");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.logo}
            source={require('../placement-pictures/coffeeLove.png')}
            />
            <Text style={styles.title} h1>Navi</Text>
        </View>
        <View style={styles.imageView}>
           <Image
             style={styles.pic}
             source={require('../placement-pictures/Logo.jpg')}
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
          <Notification
            token = {this.state.token}
            notification = {this.state.notification}
            title = {this.state.title}
            body =  {this.state.body}
          />
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
