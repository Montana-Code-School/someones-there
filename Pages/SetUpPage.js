import React from 'react';
import { StyleSheet, View, ScrollView, Picker } from 'react-native';
import { Text, Button, Avatar, Card, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  'http://' + manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `https://pure-ridge-12887.herokuapp.com`

class SetUpPage extends React.Component {

  constructor (props) {
    super(props);
      this.state = {
        holidays: false,
        exercise: false,
        eating: false,
        wakingUp: false,
        personalHygiene: false,
        sleep: false,
        none: false
      };
  }

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container}>
        <Card>
          <View>
            <Text h2 style = {styles.textStyle}>Tell me more about you!</Text>
            <Text style = {styles.textStyle}>I want to hear all about you!</Text>
            <Text style = {styles.textStyle}>Plus, this information will help me customize your experience.</Text>
          </View>
          <View>
            <Text h4 style = {styles.textStyle}>Would you like me send you custom greeting on holidays?</Text>
            <CheckBox
              title='Yes'
              onPress={() => this.setState({holidays: !this.state.holidays})}
              checked={this.state.holidays}
            />
          </View>
          <View>
            <Text h4 style = {styles.textStyle}>Which areas of your life would you like to improve on?</Text>
            <CheckBox
              title='Exercise'
              onPress={() => this.setState({exercise: !this.state.exercise})}
              checked={this.state.exercise}
            />
            <CheckBox
              title='Eating'
              onPress={() => this.setState({eating: !this.state.eating})}
              checked={this.state.eating}
            />
            <CheckBox
              title='Waking Up'
              onPress={() => this.setState({wakingUp: !this.state.wakingUp})}
              checked={this.state.wakingUp}
            />
            <CheckBox
              title='Personal Hygiene'
              onPress={() => this.setState({personalHygiene: !this.state.personalHygiene})}
              checked={this.state.personalHygiene}
            />
            <CheckBox
              title='Sleep'
              onPress={() => this.setState({sleep: !this.state.sleep})}
              checked={this.state.sleep}
            />
            <CheckBox
              title='None'
              onPress={() => this.setState({none: !this.state.none})}
              checked={this.state.none}
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
               onPress={(event) =>{
                 let prefId = navigation.state.params.user.userPreferences._id
                 fetch(`${api}/api/preferences/${prefId}`, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    holidays: this.state.holidays,
                    exercise: this.state.exercise,
                    eating: this.state.eating,
                    wakingUp: this.state.wakingUp,
                    personalHygiene: this.state.personalHygiene,
                    sleep: this.state.sleep,
                    none: this.state.none
                    }),
                })
                .then ( ( res ) => {return res.json()})
                .then ( ( data ) => {
                    navigation.state.params.user.userPreferences = navigation.state.params.user.userPreferences._id;
                    this.props.navigation.navigate('Dashboard', {user:navigation.state.params.user})
                  }
                )
              }}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

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
    backgroundColor: '#83B5D1',
  }
})

export default (SetUpPage);
