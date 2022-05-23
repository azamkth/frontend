import React from 'react';
import { 
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Dammy from '../common/Dammy';
import {Colors} from '../styles/colors';
import Accounts from './Accounts';

const user = require('../images/child/user.png');
const rocket = require('../images/child/rocket.png');
const planet = require('../images/child/planet.png');
const dumbbell = require('../images/child/dumbbell.png');

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function ChildTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel:false,
                tabBarActiveTintColor: Colors.neutral100,
                tabBarInactiveTintColor: Colors.neutral100,
                tabBarStyle: {
                    paddingTop: 10,
                    backgroundColor: Colors.primary300,
                },
                tabBarLabelStyle:{
                    paddingTop: 10,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, compoentName, foucedIconColor;
                    if (route.name == 'Accounts') {
                        iconName = focused ? planet : planet;
                        foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                        compoentName = 'Accounts';
                    } else if (route.name == 'Earn') {
                        iconName = focused ? dumbbell : dumbbell;
                        foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                        compoentName = 'Earn';
                    } else if (route.name == 'Goal') {
                        iconName = focused ? rocket : rocket;
                        foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                        compoentName = 'Goal';
                    } else if (route.name == 'Profile') {
                        iconName = focused ? user : user;
                        foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                        compoentName = 'Profile';
                    }
                    return(
                        <View style={styles.tabBarItem}>
                            <Image style={{width:22, height:19}} source={iconName} resizeMode="contain" />      
                            <Text style={styles.tabBarItemLabel}>{compoentName}</Text>
                            <Icon name="circle" size={8} color={foucedIconColor} />
                        </View>
                    )
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
                component={Dammy}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Goal"
                component={Dammy}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Dammy}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarItem: {
        alignItems:'center', 
        paddingTop:10,
        justifyContent:'center', 
    },
    tabBarItemLabel: {
        color: Colors.neutral100,
        fontSize:12,
        paddingTop:5,
        paddingBottom:5, 
    },
});

