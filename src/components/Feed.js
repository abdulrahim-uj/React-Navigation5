import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Styles } from '../assets/stylers/Styles';

Feed = () => {

    const navigation = useNavigation();
    const route = useRoute();

    let detailResult = route.params;
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>
                {detailResult ? detailResult.data : 'Navigation Drawer'}
            </Text>
            {
                Platform.select({
                    ios:
                        <Button
                            title='Go to Feed Item'
                            onPress={
                                () => {
                                    navigation.navigate('Detail', 
                                        { 
                                            screenName: "My Detail Screen" 
                                        }
                                    )
                                }
                            }
                        />,
                    android:
                        <TouchableOpacity
                            onPress={
                                () => {
                                    navigation.navigate('Detail', 
                                        { 
                                            screenName: "My Detail Screen" 
                                        }
                                    )
                                }
                            }>
                            <Text style={Styles.androidButtonText}>Go to FeedItem</Text>
                        </TouchableOpacity>
                })
            }
        </View>
    );
}


export default Feed;