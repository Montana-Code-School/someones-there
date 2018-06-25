import React, { Component } from 'react';
import DashboardPage from '../Pages/DashboardPage.js';

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
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modal}>
                  <Text style = {styles.text} link='/DashboardPage'>Dashboard</Text>
                  <Text style = {styles.text}>Settings</Text>

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
export default ModalExample

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 25
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f7021a',
      padding: 25
   },
   text: {
      color: '#3f2949',
      marginTop: 10,
      fontSize: 20
   }
})
