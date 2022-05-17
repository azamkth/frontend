import React from 'react';
import { 
    View,
    StyleSheet,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from './Test';


const Tab = createBottomTabNavigator();

export default function Parents(props) {
    return (
        <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: 'gray',
                    style: {
                        backgroundColor: '#F5F5F5',
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == 'Uppdrag') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name == 'Köpta') {
                            iconName = focused ? 'shopping-bag' : 'shopping-bag';
                        } else if (route.name == 'Vunna') {
                            iconName = focused ? 'trophy' : 'trophy';
                        } 
                        return <Icon name={iconName} size={20} color={color} />;            
                    },
                })}
            >
            <Tab.Screen
                name="Uppdrag"
                component={Test}
            />
            <Tab.Screen
                name="Köpta"
                component={Test}
            />
            <Tab.Screen
                name="Vunna"
                component={Test}
            />
        </Tab.Navigator>
    );
}
