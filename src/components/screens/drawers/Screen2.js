import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class Screen2 extends Component {
  render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Favorites</Text>
            </View>
        );
    }
}


export default Screen2;