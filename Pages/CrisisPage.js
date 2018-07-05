import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
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

class CrisisPage extends React.Component {
  render() {
    return (
      <ScrollView style = {styles.container}>
        <ModalDropdown dropdownStyle= {styles.dropdownStyle} textStyle = {styles.dropdownTextStyle} style = {styles.dropdownButtonStyle} title = 'Menu' options={['Preferences', 'Log Out', 'Crisis']}/>
        <Card>
          <Text style={styles.headingStyle} h2>Resources</Text>
          <Text style={styles.textStyle}>I know that I am great and all,
            but if you ever need to speak to
            someone else - please reach out.
            Here are some resources for
            you to utilize if you ever
            feel that you are in crisis.</Text>
          <Text style={styles.headingStyle} h4>• National Suicide Prevention Hotline</Text>
          <Text style={styles.textStyle}>The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week. We're committed to improving crisis services and advancing suicide prevention by empowering individuals, advancing professional best practices, and building awareness.</Text>
          <Text style={styles.headingStyle} h4>• Better Help</Text>
          <Text style={styles.textStyle}>Convenient, affordable, private online counseling. Anytime, anywhere.</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default withNavigation(CrisisPage);

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    margin: 5,
    fontSize: 15
  },
  headingStyle: {
    textAlign: 'center',
    margin: 5
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
