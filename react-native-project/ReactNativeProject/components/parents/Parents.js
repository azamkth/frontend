import React from 'react';
import { 
    View,
    StyleSheet,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from './Test';
import Children from './Children';


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
                        fontSize:12
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == 'Children') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name == 'Notifications') {
                            iconName = focused ? 'shopping-bag' : 'shopping-bag';
                        } else if (route.name == 'Settings') {
                            iconName = focused ? 'trophy' : 'trophy';
                        } 
                        return <Icon name={iconName} size={18} color={color} style={{paddingTop:2}} />;            
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
