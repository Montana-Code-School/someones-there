import React from 'react';
import { StyleSheet, View, ScrollView, Picker } from 'react-native';
import {Text, Button, Avatar, Card, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import ModalExample from '../Components/Modal.js';

const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev?
  manifest.debuggerHost.split(`:`).shift().concat(`:3000`):
  `http://pure-ridge-12887.herokuapp.com/api/users`


 class PreferencesPage extends React.Component {
   constructor (props) {
     super(props);
       this.state = {
         holidays: false,
         pics: false,
         exercise: false,
         eating: false,
         wakingUp: false,
         personalHygiene: false,
         sleep: false,
         none: false
       };
    }

    componentDidMount(){
      const {navigation} = this.props;
      let prefId = navigation.state.params.user.userPreferences;
      fetch(`http://${api}/api/preferences/${prefId}`,{
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
      })
      .then ( ( res ) => {return res.json()})
      .then ( ( data ) => {
        this.setState({
           holidays: data.holidays,
           pics: data.pics,
           exercise: data.exercise,
           eating: data.eating,
           wakingUp: data.wakingUp,
           personalHygiene: data.personalHygiene,
           sleep: data.sleep,
           none: data.none })
        console.log(data)
      })

    }

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container}>
        <Card>
          <View>
            <Text h2 style = {styles.textStyle}>Your Preferences!</Text>
            <Text style = {styles.textStyle}>Are you looking to change something?</Text>
            <Text style = {styles.textStyle}>Plus, this information will help me customize your experience.</Text>
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
               title="Update"
               color="#FFFFFF"
               backgroundColor="#0b2793"
               accessibilityLabel="Update"
               onPress={(event) =>{

                 let prefId = navigation.state.params.user.userPreferences

                 console.log('prefId', prefId);
                 fetch(`http://${api}/api/preferences/${prefId}`,{
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    holidays: this.state.holidays,
                    pics: this.state.pics,
                    exercise: this.state.exercise,
                    eating: this.state.eating,
                    wakingUp: this.state.wakingUp,
                    personalHygiene: this.state.personalHygiene,
                    sleep: this.state.sleep,
                    none: this.state.none
                    }
                  ),
                })
                .then ( ( res ) => {return res.json()})
                .then ( ( data ) => {
                  console.log(data)

                  this.props.navigation.navigate('Dashboard')

                })
              }}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default (PreferencesPage);
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
  }
})
