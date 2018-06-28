import React from 'react';
import { StyleSheet, View, ScrollView, Picker } from 'react-native';
import {Text, Button, Avatar, Card, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';

class SetUpPage extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        holidays: false,
        pics: false,
        exercise: false,
        eating: false,
        wakingUp: false,
        personalHygeine: false,
        sleep: false,
        none: false
      };


}
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <View>
            <Text h2 style = {styles.textStyle}>Tell me more about you!</Text>
            <Text style = {styles.textStyle}>I want to hear all about you!</Text>
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
              title='Personal Hygeine'
              onPress={() => this.setState({personalHygeine: !this.state.personalHygeine})}
              checked={this.state.personalHygeine}
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
               onPress={ () => this.props.navigation.navigate('Dashboard')}
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
export default (SetUpPage);

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
