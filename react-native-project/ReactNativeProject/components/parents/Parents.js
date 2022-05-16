import React from 'react';
import { 
    View,
    StyleSheet,
    Text
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from './Test';


const Tab = createBottomTabNavigator();

export default function Parents(props) {
    return (
        <Tab.Navigator
            screenOptions={{
                    activeTintColor: '#000',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: '#F5F5F5',
                    },
                }}
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
