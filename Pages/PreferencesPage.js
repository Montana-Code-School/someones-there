import React from 'react';
import { StyleSheet, View, ScrollView, Picker } from 'react-native';
import {
  Text,
  Button,
  Avatar,
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ModalDropdown from 'react-native-modal-dropdown';

class PreferencesPage extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <ModalDropdown dropdownStyle= {styles.dropdownStyle} textStyle = {styles.dropdownTextStyle} style = {styles.dropdownButtonStyle} title = 'Menu' options={['Preferences', 'Log Out', 'Crisis']}/>
          <Card>
            <View>
              <Text h2 style = {styles.textStyle}>Preferences</Text>
            </View>
            <View>
              <Text h4 style = {styles.textStyle}>What kind of pictures do you like?</Text>
              <FormInput
                placeholder = 'ex. Dogs'
                containerStyle = {styles.formInput}
              />
              <FormInput
                placeholder = 'ex. Flowers'
                containerStyle = {styles.formInput}
              />
            </View>
            <View>
              <Text h4 style = {styles.textStyle}>Would you like me send you custom greeting on holidays?</Text>
              <CheckBox
                title='Yes'
                // checked={this.state.checked}
              />
            </View>
            <View>
              <Text h4 style = {styles.textStyle}>Which areas of your life would you like to improve on?</Text>
              <CheckBox
                title='Exercise'
                // checked={this.state.checked}
              />
              <CheckBox
                title='Eating'
                // checked={this.state.checked}
              />
              <CheckBox
                title='Waking Up'
                // checked={this.state.checked}
              />
              <CheckBox
                title='Personal Hygeine'
                // checked={this.state.checked}
              />
              <CheckBox
                title='Sleep'
                // checked={this.state.checked}
              />
              <CheckBox
                title='None'
                // checked={this.state.checked}
              />
            </View>
            <View>
              <Button
                 buttonStyle = {styles.buttonStyle}
                 rounded
                 icon={{name: 'mouse-pointer', type: 'font-awesome'}}
                 raised
                 title="Submit"
                 color="#FFFFFF"
                 backgroundColor="#0b2793"
                 accessibilityLabel="Submit"
                 onPress={ () => this.props.navigation.navigate('Dashboard')}
              />
          </View>
      </Card>
  </ScrollView>
  );
 }
}

export default withNavigation(PreferencesPage);

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#91e4fb',
  },
  dropdownButtonStyle: {
    backgroundColor:"#0b2793",
    width: 150,
    height: 40,
    borderRadius: 15,
    alignSelf: 'flex-end',
    margin: 5
  },
  dropdownTextStyle: {
    color:"#ffffff",
    textAlign:'center',
    padding:10,
    fontSize:15
  },
  dropdownStyle: {
    width: 150,
    height: 100,
    borderRadius: 15
  }
})
