import React, { Component } from 'react';
import LandingPage from '../Pages/LandingPage';
import SignUpPage from '../Pages/SignUpPage';
import LoginPage from '../Pages/LoginPage';
import {Button} from 'react-native-elements';
import { withNavigation } from 'react-navigation';


import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet
}
from 'react-native'

class NonAuthModal extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"fade"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modal}>
                  <Button
                  medium
                  rounded
                  style={{padding: 30}}
                  title="Home"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                  title='Home' onPress={ () => {
                    this.props.navigation.navigate("Landing")
                    this.toggleModal(!this.state.modalVisible)
                  }}/>

                  <Button
                  medium
                  rounded
                  style={{padding: 30}}
                  title="Login"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                  title='Login' onPress={ () => {
                    this.props.navigation.navigate("LogIn")
                    this.toggleModal(!this.state.modalVisible)
                  }}/>


                  <Button
                  medium
                  rounded
                  style={{padding: 20}}
                  title="Sign Up"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                  title='Sign Up' onPress={ () => {
                    this.props.navigation.navigate("SignUp")
                    this.toggleModal(!this.state.modalVisible)
                  }}/>

                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>

                     <Text style = {styles.text}>Cancel</Text>
                  </TouchableHighlight>
               </View>
            </Modal>

            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Menu</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default withNavigation(NonAuthModal);

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 10
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'yellow',
      padding: 25
   },
   text: {
      color: '#3f2949',
      marginTop: 10,
      fontSize: 25
   }
})
