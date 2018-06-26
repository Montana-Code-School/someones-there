import React, { Component } from 'react';
import DashboardPage from '../Pages/DashboardPage.js';
import PreferencesPage from '../Pages/PreferencesPage'
import CrisisPage from '../Pages/CrisisPage';
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

class ModalExample extends Component {
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
                  title="Login"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                  title='Dashboard' onPress={ () => {
                    this.props.navigation.navigate("Dashboard")
                    this.toggleModal(!this.state.modalVisible)
                  }}/>
                  
                  <Button
                  medium
                  rounded
                  style={{padding: 30}}
                  title="Login"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                  title='Preferences' onPress={ () => {
                    this.props.navigation.navigate("Preferences")
                    this.toggleModal(!this.state.modalVisible)
                  }}/>

                  <Button title='Crisis'
                  medium
                  rounded
                  style={{padding: 30}}
                  title="Login"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                   onPress={ () => {
                    this.props.navigation.navigate("Crisis")
                    this.toggleModal(!this.state.modalVisible)
                  }}/>

                  <Button
                  medium
                  rounded
                  style={{padding: 20}}
                  title="Login"
                  color="#FFFFFF"
                  backgroundColor="#0b2793"
                  title='Logout' onPress={ () => {
                    this.props.navigation.navigate("Logout")
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
export default withNavigation(ModalExample);

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 50
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
