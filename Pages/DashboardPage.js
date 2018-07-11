import React from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Button, Avatar } from 'react-native-elements';
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
          }
      };
  }

  static navigationOptions = {
    title: "Dashboard",
  };

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
            <Text style={styles.taglineStyle}>The future belongs to those who believe in the beauty of their dreams.</Text>
            <Text style={styles.taglineStyle}>- Eleanor Roosevelt</Text>
          </View>
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
