import React from 'react';
import { ScrollView, StyleSheet, View, AppRegistry } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text, Button, Avatar, Card, FormInput } from 'react-native-elements';


class LoginPage extends React.Component {

  static navigationOptions = {
    title: "Login Page",
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card title="Login">
          <View>
              <FormInput
              placeholder = "Email"
              style={{height: 40}}
              />
              <FormInput
              placeholder = "Password"
                style={{height: 40}}
              />
              <Button
                 medium
                 rounded
                 style={{padding: 30}}
                 title="Login"
                 color="#FFFFFF"
                 backgroundColor="#0b2793"
                 icon={{name: 'user-circle', type: 'font-awesome'}}
                 accessibilityLabel="Login button"
                 onPress={ () => this.props.navigation.navigate('Dashboard')}
              />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91e4fb',
  }
})


//Wrapping the entire component in
//the withNavigation function allows us to
//access this.props.navigation.navigate
export default withNavigation(LogInPage);

