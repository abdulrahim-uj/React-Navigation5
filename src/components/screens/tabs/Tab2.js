import React from 'react';
import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Styles } from '../../../assets/stylers/Styles';

Tab2 = () => {

    const isFocused = useIsFocused();
    console.log(isFocused);

    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Tab 2</Text>
        </View>
    );
}


export default Tab2;