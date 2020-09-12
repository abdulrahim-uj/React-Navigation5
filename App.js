/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

//COMPONENT FOR DRAWER NAVIGATION
import Screen1 from './src/components/screens/drawers/Screen1';
import Screen2 from './src/components/screens/drawers/Screen2';
import Screen3 from './src/components/screens/drawers/Screen3';
//COMPONENT FOR MATERIAL TOP/ BOTTOM TAB NAVIGATION
import Tab1 from './src/components/screens/tabs/Tab1';
import Tab2 from './src/components/screens/tabs/Tab2';
import Tab3	from './src/components/screens/tabs/Tab3';
//COMPONENT FOR STACK NAVIGATION
import Feed from './src/components/Feed';
import Detail from './src/components/Detail';
//IMPORTS FOR WORKING REACT-NAVIGATION
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions
} from '@react-navigation/native';
//IMPORT FROM REACT-NAVIGATION FOR STACK NAVIGATOR
import { createStackNavigator } from '@react-navigation/stack';
//IMPORT FROM REACT-NAVIGATION FOR DRAWER NAVIGATOR
import { createDrawerNavigator } from '@react-navigation/drawer';
//IMPORT FROM REACT-NAVIGATION FOR MATERIAL BOTTOM TAB NAVIGATOR
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//IMPORT FROM REACT-NAVOGATION FOR MATERIAL TOP TAB NAVIGATOR
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//IMPORT FROM REACT-NATIVE VECTOR ICONS FOR MATERIAL COMMUNITY ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//IMPORT FROM REACT-NATIVE VECTOR ICONS FOR IONIC ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';
//IMPORT FROM REACT-NATIVE APPEARANCE FOR THEMING {DARK/LIGHT/NONE MODS}
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';

const Drawer = createDrawerNavigator();     //CONSTANT VARIABLE FOR DRAWER NAVIGATOR
const Stack = createStackNavigator();       //CONSTANT VARIABLE FOR STACK NAVIGATOR
const MaterialBottomTabs = createMaterialBottomTabNavigator();      //CONSTANT VARIABLE FOR BOTTOM TAB NAVIGATOR
const MaterialTopTabs = createMaterialTopTabNavigator();        //CONSTANT VARIABLE FOR TOP TAB NAVIGATOR

 

export default class App extends Component {
    //FOR STACK NAVIGATOR WITH THE DRAWER
    createHomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    children={this.createDrawer}    //CHILD VARIABLE AS DRAWER NAVIGATOR JSX FUNCTION
                    options={
                        ({
                            navigation
                        }) => ({
                            title: "React Navigation",
                            headerLeft: () => 
                                <MaterialCommunityIcons 
                                    onPress={
                                        () =>
                                            navigation.dispatch(DrawerActions.toggleDrawer())
                                    }
                                    style={
                                        [
                                            {
                                                color: 'red',
                                                marginLeft: 8
                                            }
                                        ]
                                    }
                                    size={24}
                                    name={'menu'}
                                />
                        })
                    } 
                />
                <Stack.Screen 
                    name="Detail" 
                    component={Detail}
                    options={
                        {
                            title: "Details Screen"
                        }
                    }
                />
                <Stack.Screen 
                    name="Bottom Tabs" 
                    children={this.createBottomTabs} 
                />
                <Stack.Screen 
                    name="Top Tabs"
                    component={this.createTopTabs}
                />
            </Stack.Navigator>
        );
    }
       
    // DRAWER JSX FUNCTION
    createDrawer = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="Feed" 
                    component={Feed}
                    options={
                        {
                            drawerLabel: "Home",
                            drawerIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'home'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Contacts" 
                    component={Screen1} 
                    options={
                        {
                            drawerLabel: "Contacts",
                            drawerIcon: () =>
                                (
                                    <MaterialCommunityIcons
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'contacts'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Favorites" 
                    component={Screen2} 
                    options={
                        {
                            drawerLabel: "Favorites",
                            drawerIcon: () =>
                                (
                                    <MaterialCommunityIcons
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'heart'}
                                    />
                                )
                        }
                    }
                />
                <Drawer.Screen 
                    name="Settings" 
                    component={Screen3} 
                    options={
                        {
                            drawerLabel: "Settings",
                            drawerIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'blue'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'settings-outline'}
                                    />
                                )
                        }
                    }    
                />
            </Drawer.Navigator>
        );
    }
       
    //BOTTOM TAB JSX FUNCTION
    createBottomTabs = () => {
        return (
            <MaterialBottomTabs.Navigator>
                <MaterialBottomTabs.Screen 
                    name="Tab1"
                    style={
                        {
                            marginBottom: 16
                        }
                    }
                    component={Tab1}
                    options={
                        {
                            tabBarLabel: "Home",
                            tabBarIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'home'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="Tab2"
                    component={Tab2}
                    options={
                        {
                            tabBarLabel: 'Profile',
                            tabBarIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'human'}
                                    />
                                )
                        }
                    }
                />
                <MaterialBottomTabs.Screen 
                    name="Tab3"
                    component={Tab3}
                    options={
                        {
                            tabBarLabel: 'Map',
                            tabBarIcon: () =>
                                (
                                    <MaterialCommunityIcons 
                                        style={
                                            [
                                                {
                                                    color: '#fff'
                                                }
                                            ]
                                        }
                                        size={24}
                                        name={'map'}
                                    />
                                )
                        }
                    }
                />
            </MaterialBottomTabs.Navigator>
        );
    }

    //TOP TAB JSX FUNCTION
    createTopTabs = (props) => {
            
        return(
            <MaterialTopTabs.Navigator tabBarOptions={{ showIcon: true }}>
                <MaterialTopTabs.Screen 
                    name="Tab1"
                    component={Tab1}
                    options={
                        {
                            title: props.route.params.name,
                            tabBarLabel: "Help-Desk",
                            tabBarIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'red'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'headset-outline'}
                                    />
                                )
                        }
                    }
                />
                <MaterialTopTabs.Screen 
                    name="Tab2"
                    component={Tab2}
                    options={
                        {
                            tabBarLabel: "Clip board",
                            tabBarIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'red'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'clipboard-outline'}
                                    />
                                )
                        }
                    }
                />
                <MaterialTopTabs.Screen 
                    name="Tab3"
                    component={Tab3}
                    options={
                        {
                            tabBarLabel: "Authent",
                            tabBarIcon: () =>
                                (
                                    <Ionicons
                                        style={
                                            [
                                                {
                                                    color: 'red'
                                                }
                                            ]
                                        }
                                        size={25}
                                        name={'finger-print-outline'}
                                    />
                                )
                        }
                    }
                />
            </MaterialTopTabs.Navigator>
        );
    }

    render() {
        
        return(
            //NAVIGATION CONTAINER
            <NavigationContainer>       
                {this.createHomeStack()}    
            </NavigationContainer>
        );
    }
}