import React from 'react';
import NonAuthModal from '../Components/NonAuthModal';
import { StyleSheet, View, ReactNativeComponentTree } from 'react-native';
import {
  Text,
  Button,
  Avatar,
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Expo from 'expo';
const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `api.example.com`
  //replace api.example.com with our production host


class SignUpPage extends React.Component {

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
  componentDidMount(){
    console.log(manifest.debuggerHost);
  }

  static navigationOptions = {
    title: "Sign Up",
  };
  render() {
    return (
      <View>
        <Card
          title='Sign Up'
          titleStyle = {styles.cardTitle}
          containerStyle = {styles.cardContainer}>
            <FormInput
              placeholder = 'First Name'
              ref = {(el) => {this.firstName = el; }}
              containerStyle = {styles.formInput}
              onChangeText = {(firstName) => this.setState({firstName})}
              value={this.state.firstName}
            />
            <FormInput
              placeholder = 'Last Name'
              ref = {(el) => {this.lastName = el; }}
              containerStyle = {styles.formInput}
              onChangeText = {(lastName) => this.setState({lastName})}
              value={this.state.lastName}
            />
            <FormInput
              placeholder = 'Email'
              ref = {(el) => {this.email = el; }}
              containerStyle = {styles.formInput}
              onChangeText = {(email) => this.setState({email})}
              value={this.state.email}
            />
            <FormInput
              placeholder = 'Password (8+ characters)'
              ref = {(el) => {this.password = el; }}
              containerStyle = {styles.formInput}
              onChangeText = {(password) => this.setState({password})}
              value={this.state.password}
            />
            <FormInput
              placeholder = 'Birthday'
              ref = {(el) => {this.birthday = el; }}
              containerStyle = {styles.formInput}
              onChangeText = {(birthday) => this.setState({birthday})}
              value={this.state.birthday}
            />
            <Text>{this.state.pageErrors.message}</Text>
            <Button
               buttonStyle = {styles.buttonStyle}
               large
               rounded
               raised
               icon={{name: 'user-circle', type: 'font-awesome'}}
               title="Create Account"
               color="#FFFFFF"
               backgroundColor="#0b2793"
               accessibilityLabel= "Create Account"
               onPress={ (event) => {
                 let formField= {
                  firstName:this.state.firstName,
                  lastName:this.state.lastName,
                  email:this.state.email,
                  password:this.state.password,
                  birthday:this.state.birthday
                 }
                 let isSet = true;
                 for (var prop in formField) {
                   if (formField.hasOwnProperty(prop) && formField[prop] === "") {
                     isSet = false;
                   }
                 }
                 if (!isSet) {
                   let errorObj = {
                     error : true,
                     message: 'all fields must be set'
                   }
                   this.setState({
                     pageErrors : errorObj
                   })
                   return false;
                 } else {
                   fetch(`http://${api}/api/users`,{
                     method: 'POST',
                     headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(
                       formField
                     ),
                   })
                    .then ( ( res ) => {return res.json()})
                    .then ( ( data ) => ( data ) )
                 }
                 this.props.navigation.navigate('SetUp')
                }
               }
             />
        </Card>
      </View>
    );
  }
}

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default (SignUpPage)

const styles = StyleSheet.create({
  formInput: {
    margin: 10
  },
  buttonStyle: {
    margin: 10
  },
  cardTitle: {
    fontSize: 20
  },
  containerCard: {
    padding: 40
  }
})
