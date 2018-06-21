import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../placement-pictures/coffeeLove.png')}
        style={{ width: 40, height: 40 }}
      />
    );
  }
}
