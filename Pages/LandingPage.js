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
import { Text, Button, Avatar } from 'react-native-elements';
import { Permissions, Notifications } from 'expo';

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
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageView}>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Image
            style={styles.pic}
            source={require('../placement-pictures/navi.png')}
          />
          <Text>{'\n'}</Text>
          <Text style={styles.taglineStyle}>Always have someone there for you.</Text>
          <Text>{'\n'}</Text>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83B5D1'
  },
  pic: {
    height: 270,
    width: 270,
    alignContent: "center"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25
  },
  logo: {
    height: 50,
    width: 50
  },
  taglineStyle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  }
});

export default (LandingPage);
