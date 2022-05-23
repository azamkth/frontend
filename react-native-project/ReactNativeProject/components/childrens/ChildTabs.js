import React from 'react';
import { 
    StyleSheet,
    Image
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accounts from './Accounts';

const dumbbell = require('../images/child/dumbbell.png');
const planet = require('../images/child/planet.png');
const rocket = require('../images/child/rocket.png');
const user = require('../images/child/user.png');


const Tab = createBottomTabNavigator();

export default function ChildTabs(props) {
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
                        if (route.name == 'Accounts') {
                            iconName = focused ? planet : planet;
                        } else if (route.name == 'Earn') {
                            iconName = focused ? dumbbell : dumbbell;
                        } else if (route.name == 'Goal') {
                            iconName = focused ? rocket : rocket;
                        } else if (route.name == 'Profile') {
                            iconName = focused ? user : user;
                        }

                        return <Image style={{width:22, height:19}} source={iconName} resizeMode="contain" />;
                    },
                })}
               
            >
            <Tab.Screen
                name="Accounts"
                component={Accounts}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Earn"
                component={Accounts}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Goal"
                component={Accounts}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Accounts}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

