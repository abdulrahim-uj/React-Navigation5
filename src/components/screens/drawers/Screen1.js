import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../../../assets/stylers/Styles';


class Screen1 extends Component {
    render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Contacts</Text>
            </View>
        );
    }
}


export default Screen1;



// Screen1 = () => {
//     return(
//         <View style={Styles.container}>
//             <Text style={Styles.title}>Contacts</Text>
//         </View>
//     );
// }
// export default Screen1;



// Screen1 = () => 
//     <View style={Styles.container}>
//         <Text style={Styles.title}>Contacts</Text>
//     </View>
// export default Screen1;