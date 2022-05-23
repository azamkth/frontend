import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {Colors} from '../styles/colors';
import Dammy from '../common/Dammy';
import ChildNavigationStack from './ChildNavigationStack';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bell = require('../images/parent/bell.png');
const wrench = require('../images/parent/wrench.png');
const pacman = require('../images/parent/pacman.png');

const Tab = createBottomTabNavigator();

export default function Parents() {
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
                        if (route.name == 'Children') {
                            iconName = focused ? pacman : pacman;
                            foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                            compoentName = 'Children';
                        } else if (route.name == 'Notifications') {
                            iconName = focused ? bell : bell;
                            foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                            compoentName = 'Notifications';
                        } else if (route.name == 'Settings') {
                            foucedIconColor = focused ? Colors.neutral100 : Colors.primary300;
                            iconName = focused ? wrench : wrench;
                            compoentName = 'Settings';
                        } 
                        return(
                            <View style={styles.tabBarItem}>
                                 <Image style={{width:22, height:20}} source={iconName} resizeMode="contain" />      
                                 <Text style={styles.tabBarItemLabel}>{compoentName}</Text>
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
                component={Dammy}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
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
        paddingTop:10,
        alignItems:'center', 
        justifyContent:'center', 
    },
    tabBarItemLabel: {
        color: Colors.neutral100, 
        fontSize:12,
        paddingTop:5,
        paddingBottom:5, 
    },
});
