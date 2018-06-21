import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {Text, Button, Avatar } from 'react-native-elements';



export default class App extends React.Component {
  render() {
    return (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Avatar style={{margin: 30}}
          medium
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
      />
      <Text style={styles.title} h1>Hygge</Text>
    </View>
      <View >
       <Image style={{height: 200, width: 200}}source={require('./placement-pictures/pug.jpg')} />
        <Text h3>Meow</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
           title="Create Account"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
        />
      </View>
   </View>
    );
  }
}

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

  }
});
