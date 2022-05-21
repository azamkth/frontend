import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from './Test';
import Children from './Children';

const bell = require('../images/parent/bell.png');
const pacman = require('../images/parent/pacman.png');
const wrench = require('../images/parent/wrench.png');


const Tab = createBottomTabNavigator();

export default function Parents(props) {
    return (
        <Tab.Navigator
                screenOptions={({ route }) => ({
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
                        let iconName;
                        if (route.name == 'Children') {
                            iconName = focused ? pacman : pacman;
                        } else if (route.name == 'Notifications') {
                            iconName = focused ? bell : bell;
                        } else if (route.name == 'Settings') {
                            iconName = focused ? wrench : wrench;
                        } 
                        /* return <Icon name={iconName} size={18} color={color} style={{paddingTop:2}} />;             */
                        return <Image style={{width:22, height:24}} source={iconName} />;
                    },
                })}
               
            >
            <Tab.Screen
                name="Children"
                component={Children}
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
