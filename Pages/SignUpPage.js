import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Text, Button, Avatar, Card, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class SignUpPage extends React.Component {
  static navigationOptions = {
    title: "Sign Up",
  };
  render() {
    return (

      <View>
        <Card
          title='Sign Up'
          titleStyle = {styles.cardTitle}
          containerStyle = {styles.cardContainer}
        >
          <FormInput
            placeholder = 'First Name'
            containerStyle = {styles.formInput}
          />
          <FormInput
            placeholder = 'Last Name'
            containerStyle = {styles.formInput}
          />
          <FormInput
            placeholder = 'Email'
            containerStyle = {styles.formInput}
          />
          <FormInput
            placeholder = 'Password (8+ characters)'
            containerStyle = {styles.formInput}
          />
          <FormInput
            placeholder = 'Birthday'
            containerStyle = {styles.formInput}
          />
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
             onPress={ () => this.props.navigation.navigate('LogIn')}
          />
        </Card>
      </View>
    );
  }
}

export default withNavigation(SignUpPage)

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
