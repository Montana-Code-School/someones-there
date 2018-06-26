import React from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Text, Button, Avatar } from 'react-native-elements';
import ModalExample from '../Components/Modal';

  class DashboardPage extends React.Component {

    static navigationOptions = {
      title: "Dashboard",
    };

    render() {
      return (
        <ScrollView>
          <ModalExample />

        <View style={styles.titleContainer}>
          <Avatar
            size="medium"
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text h2>Welcome, User!</Text>
        </View>
        <View style={styles.textView}>
           <Text h4>How is your day going today?</Text>
        </View>
        <View style={styles.imageView}>
           <Image
              style={styles.pic}
              source={require('../placement-pictures/pug.jpg')}
           />
            <Text h3></Text>
            <Text style={styles.taglineStyle}>insert quote here</Text>
          </View>
      </ScrollView>
    );
  }
}




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
textView:{
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
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
taglineStyle: {
  fontSize: 15,
  textAlign: 'center',
  marginTop: 10
}
});

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default withNavigation(DashboardPage);
