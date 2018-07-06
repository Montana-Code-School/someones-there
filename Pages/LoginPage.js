import React from 'react';
import { ScrollView, StyleSheet, View, AppRegistry } from 'react-native';
import { Text, Button, Avatar, Card, FormInput } from 'react-native-elements';
import NonAuthModal from '../Components/NonAuthModal';
import {formField} from '../Pages/SignUpPage';
import Expo from 'expo';

const { manifest } = Expo.Constants;

const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  'http://' + manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `https://pure-ridge-12887.herokuapp.com`

class LoginPage extends React.Component {

  static navigationOptions = {
    title: "Login Page",
  };

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container}>
        <NonAuthModal />
        <Card title="Login">
          <View>
              <FormInput
              placeholder = "Email"
              // value = {navigation.state.params.user.email}
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
                  fetch(`${api}/api/users/`, {
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
                  .then ( ( data ) => {
                      console.log(data)
                      this.props.navigation.navigate('Dashboard',
                        {user: data.users} //BUILD A ROUTE TO FIND USER BY EMAIL
                      )
                  })
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
