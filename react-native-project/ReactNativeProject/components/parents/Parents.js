import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChildNavigationStack from './ChildNavigationStack';

import Test from './Test';

const bell = require('../images/parent/bell.png');
const pacman = require('../images/parent/pacman.png');
const wrench = require('../images/parent/wrench.png');


const Tab = createBottomTabNavigator();

export default function Parents(props) {
    return (
        <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel:false,
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#FFF',
                    tabBarStyle: {
                        paddingTop: 10,
                        backgroundColor: '#333755',
                    },
                    tabBarLabelStyle:{
                        fontSize:12,
                        paddingTop: 10,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName, compoentName, foucedIconColor;
                        if (route.name == 'Children') {
                            iconName = focused ? pacman : pacman;
                            foucedIconColor = focused ? '#fff' : '#333755';
                            compoentName = 'Children';
                        } else if (route.name == 'Notifications') {
                            iconName = focused ? bell : bell;
                            foucedIconColor = focused ? '#fff' : '#333755';
                            compoentName = 'Notifications';
                        } else if (route.name == 'Settings') {
                            foucedIconColor = focused ? '#fff' : '#333755';
                            iconName = focused ? wrench : wrench;
                            compoentName = 'Settings';
                        } 
                        return(
                            <View style={{justifyContent:'center', alignItems:'center', paddingTop:10}}>
                                 <Image style={{width:22, height:20}} source={iconName} resizeMode="contain" />      
                                 <Text style={{color:'#fff', fontSize:12,paddingBottom:5, paddingTop:5}}>{compoentName}</Text>
                                 <Icon name="circle" size={8} color={foucedIconColor} />
                            </View>
                            
                        ) 
                            
                    },
                })}
               
            >
            <Tab.Screen
                name="Children"
                component={ChildNavigationStack}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Test}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Test}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}
