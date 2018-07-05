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



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      notification: null,
      title: 'Hello World',
      body: 'Say something!',
    };
  }

  async registerForPushNotifications() {
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
      token,
    });
  }

  sendPushNotification(token = this.state.token, title = this.state.title, body = this.state.body) {
    return fetch('https://exp.host/--/api/v2/push/send', {
      body: JSON.stringify({
        to: token,
        title: title,
        body: body,
        data: { message: `${title} - ${body}` },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }

  handleNotification = notification => {
    this.setState({
      notification,
    });
  };

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
            <Text style={styles.title} h1>Navi</Text>
        </View>
        <View style={styles.imageView}>
           <Image
             style={styles.pic}
             source={require('../placement-pictures/pug.jpg')}
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
          <KeyboardAvoidingView style={styles1.container} behavior="position">
          <Text style={styles1.title}>Expo Sample Notifications App</Text>
          <Text style={styles1.text}>Title</Text>
          <TextInput
            style={styles1.input}
            onChangeText={title => this.setState({ title })}
            maxLength={100}
            value={this.state.title}
          />
          <Text style={styles1.text}>Message</Text>
          <TextInput
            style={styles1.input}
            onChangeText={body => this.setState({ body })}
            maxLength={100}
            value={this.state.body}
          />
          <TouchableOpacity
            onPress={() => this.registerForPushNotifications()}
            style={styles1.touchable}>
            <Text>Register me for notifications!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sendPushNotification()} style={styles1.touchable}>
            <Text>Send me a notification!</Text>
          </TouchableOpacity>
          {this.state.token ? (
            <View>
              <Text style={styles1.text}>Token</Text>
              <TextInput
                style={styles1.input}
                onChangeText={token => this.setState({ token })}
                value={this.state.token}
              />
            </View>
          ) : null}
          {this.state.notification ? (
            <View>
              <Text style={styles1.text}>Last Notification:</Text>
              <Text style={styles1.text}>{JSON.stringify(this.state.notification.data.message)}</Text>
            </View>
          ) : null}
          </KeyboardAvoidingView>
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
const styles1 = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 8,
  },
  text: {
    paddingBottom: 2,
    padding: 8,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    padding: 8,
    width: '95%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
    width: '95%',
  },
});
