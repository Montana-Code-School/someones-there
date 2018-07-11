import React from 'react';
import { StyleSheet, View, Text, Button, Linking, ScrollView, Header, flex, Image } from 'react-native';
import ModalExample from '../Components/Modal.js';

class HelpPage extends React.Component {

  render() {
    return (
      <ScrollView >
        <ModalExample />
        <View style={styles.container}>
          <Text style={styles.text}>Need help?</Text>
          <Text>{'\n'}</Text>
          <Image
            style={styles.pic}
            source={require('../placement-pictures/sadHappy.jpg')}
          />
          <Text>{'\n'}</Text>
          <Text style={{color: 'blue', fontSize: 15}}
                onPress={() => Linking.openURL('https://suicidepreventionlifeline.org/')}>
            Suicide Prevention Lifeline
          </Text>
          <Text>24/7 free and confidential support for people in distress.</Text>
          <Text>{'\n'}</Text>
          <Text style={{color: 'blue', fontSize: 15}}
                onPress={() => Linking.openURL('https://findtreatment.samhsa.gov/')}>
            SAMHSA
          </Text>
          <Text>Behavioral Heath Treatment Services Locator.</Text>
          <Text>{'\n'}</Text>
          <Text style={{color: 'blue', fontSize: 15}}
                onPress={() => Linking.openURL('https://www.hopeline-nc.org/?gclid=CjwKCAjwspHaBRBFEiwA0eM3kddxf981UtN_IpZ7dDH2XEBeKz7bHpBDSieiqHiLb_LJ9nRZEKGBmRoCQnAQAvD_BwE')}>
            HopeLine
          </Text>
          <Text>Call or Text Hotline</Text>
          <Text>{'\n'}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles= StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cce6ff',
    padding: 25
  },
  text: {
     fontSize: 25
  },
  pic: {
    height: 250,
    width: 290,
    alignContent: "center",
    marginLeft: 50,
    marginRight: 50
  }
})

export default (HelpPage);
