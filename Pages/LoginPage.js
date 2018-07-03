import React from 'react';
import { ScrollView, StyleSheet, View, AppRegistry } from 'react-native';
import { Text, Button, Avatar, Card, FormInput } from 'react-native-elements';
import NonAuthModal from '../Components/NonAuthModal';
import {formField} from '../Pages/SignUpPage';
import Expo from 'expo';



const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `http://pure-ridge-12887.herokuapp.com/api/users`

class LoginPage extends React.Component {

  static navigationOptions = {
    title: "Login Page",
  };

  render() {
    return (

      <ScrollView style={styles.container}>
        <NonAuthModal />
        <Card title="Login">
          <View>
              <FormInput
              placeholder = "Email"
              style={{height: 40}}
              />
              <FormInput
              placeholder = "Password"
                style={{height: 40}}
              />
              <Button
                 medium
                 rounded
                 style={{padding: 30}}
                 title="Login"
                 color="#FFFFFF"
                 backgroundColor="#0b2793"
                 icon={{name: 'user-circle', type: 'font-awesome'}}
                 accessibilityLabel="Login button"
                 onPress={ (event) =>{
                  fetch(`http://${api}/api/users`, {
                     method: 'GET',
                     headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(
                       formField
                     ),
                  })
                  .then ( ( res ) => {return res.json()})
                  .then ( ( data ) => (
                      this.props.navigation.navigate('Dashboard',
                        {user: data}
                      )
                  ))
               }}

              />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91e4fb',
  }
})


//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default (LoginPage);
