import React from 'react';
import { ScrollView, StyleSheet, View, AppRegistry } from 'react-native';
import { Text, Button, Avatar, Card, FormInput } from 'react-native-elements';
import NonAuthModal from '../Components/NonAuthModal';
import {formField} from '../Pages/SignUpPage';
import Expo from 'expo';
import { withNavigation } from 'react-navigation';

const { manifest } = Expo.Constants;

const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  'http://' + manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `https://pure-ridge-12887.herokuapp.com`

class LoginPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }


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
              <FormInput id = {`email`}
              placeholder = "Email"
              onChangeText={(email) => this.setState({email})}
              style={{height: 40}}
              />
              <FormInput
              placeholder = "Password"
              // onChange={(e) => this.setState({password: })}
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
                  fetch(`${api}/api/userFindByEmail/${this.state.email}`)
                  .then ( ( res ) => {return res.json()})
                  .then ( ( data ) => {
                    console.log(data)
                      this.props.navigation.navigate('Dashboard',
                        {user: data[0]} //BUILD A ROUTE TO FIND USER BY EMAIL
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
