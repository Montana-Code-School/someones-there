import React from 'react';
import { ScrollView, StyleSheet, View, AppRegistry, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text, Button, Avatar, Card } from 'react-native-elements';


class LogInPage extends React.Component {
  static navigationOptions = {
    title: "Login Page",
  };
  render() {
    return (
      <ScrollView style={styles.container}>
      <Card title="Login">
      <View>
        <Text h4>Email:</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text h4>password:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Button
           rounded
           title="Login"
           color="#FFFFFF"
           backgroundColor="#0b2793"
           accessibilityLabel="Login button"
           onPress={ () => this.props.navigation.navigate('Dashboard')}
        />
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


export default withNavigation(LogInPage);
