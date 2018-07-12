import React from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
import { Permissions, Notifications } from 'expo';
import ModalExample from '../Components/Modal';

class DashboardPage extends React.Component {

  constructor(props){
    super(props);
      this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          birthday: '',
          pageErrors : {
            error : false,
            message: ''
          },
          title: 'Hey Listen!',
          body: 'Have you gone on a walk lately?',
          token: null,
          notification: null
      };
      this.initialRegister = this.initialRegister.bind(this)
      this.handleNotification = this.handleNotification.bind(this)
      this.sendPushNotification = this.sendPushNotification.bind(this)
  }

  static navigationOptions = {
    title: "Dashboard",
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

    this.setState({
      token
    });
  }

  handleNotification = notification => {
    console.log(notification);
    this.setState({
      notification,
    });
  };

  sendPushNotification(token = this.state.token,
    title = this.state.title, body = this.state.body) {
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

  componentDidMount(){
     this.initialRegister()
     setTimeout(() => { this.sendPushNotification() }, 3000);
  }

  render() {
    const {navigation} = this.props;

      return (
        <ScrollView style={styles.container}>
          <ModalExample user = {navigation.state.params.user}/>
          <View style={styles.titleContainer}>
            <Text h2>Welcome, {navigation.state.params.user.firstName}</Text>
          </View>
          <View style={styles.textView}>
            <Text h4>How is your day going today?</Text>
          </View>
          <View style={styles.imageView}>
            <Image
              style={styles.pic}
              source={require('../placement-pictures/navi.png')}
            />
            <Text h3></Text>
            <Text style={styles.taglineStyle}>The future belongs to those who believe </Text>
            <Text style={styles.taglineStyle}>in the beauty of their dreams.</Text>
            <Text style={styles.taglineStyle}>- Eleanor Roosevelt</Text>
          </View>
          {this.state.notification ? (
            <View style={styles.noteStyle}>
              <Text style={styles.noteText}>{JSON.stringify(this.state.notification.data.message)}</Text>
             </View>
           ) : null}

        </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83B5D1',
  },
  titleContainer: {
    justifyContent: 'space-evenly',
    flexDirection: "row",
    margin: 15
  },
  noteStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F3E91',
    padding: 6
  },
  noteText: {
    color: "#83B5D1"
  },
  pic: {
    height: 270,
    width: 270,
    alignContent: "center",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imageView: {
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
  taglineStyle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  }
});

export default (DashboardPage);
