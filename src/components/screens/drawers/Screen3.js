import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class Screen3 extends Component {
    render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Settings</Text>
            </View>
        );
    }
}


export default Screen3;