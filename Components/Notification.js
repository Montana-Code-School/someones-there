import React, {Component} from 'react';
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
import { Permissions, Notifications } from 'expo';
import { withNavigation } from 'react-navigation';
import sendPushNotification from '../Helper/Send.js'

class Notification extends Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
  if (this.props.token != null ){
  sendPushNotification(this.props.token, 'baloney', 'sandwich')
  }
}
// THURSDAY: HAVING PROBLEMS WITH MOVING IN AND OUT OF ASYNC
render() {
   return (
     <View>
     {this.props.notification ? (
       <View>
         <Text style={styles1.text}>Last Notification:</Text>
         <Text style={styles1.text}>{JSON.stringify(this.props.notification.data.message)}</Text>
       </View>
     ) : null}
     </View>
  )}
}

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

export default (Notification);
