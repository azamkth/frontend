import React from 'react';
import { 
    Image,
    View,
    Text,

} from 'react-native';

const white = '#ffffff';
const darkGrey = '#333755';

const user = require('../images/child/user.png');
const rocket = require('../images/child/rocket.png');
const planet = require('../images/child/planet.png');
const dumbbell = require('../images/child/dumbbell.png');

import Dammy from '../common/Dammy';
import Accounts from './Accounts';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function ChildTabs() {
    return (
        <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel:false,
                    tabBarActiveTintColor: white,
                    tabBarInactiveTintColor: white,
                    tabBarStyle: {
                        paddingTop: 10,
                        backgroundColor: darkGrey,
                    },
                    tabBarLabelStyle:{
                        paddingTop: 10,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName, compoentName, foucedIconColor;
                        if (route.name == 'Accounts') {
                            iconName = focused ? planet : planet;
                            foucedIconColor = focused ? white : darkGrey;
                            compoentName = 'Accounts';
                        } else if (route.name == 'Earn') {
                            iconName = focused ? dumbbell : dumbbell;
                            foucedIconColor = focused ? white : darkGrey;
                            compoentName = 'Earn';
                        } else if (route.name == 'Goal') {
                            iconName = focused ? rocket : rocket;
                            foucedIconColor = focused ? white : darkGrey;
                            compoentName = 'Goal';
                        } else if (route.name == 'Profile') {
                            iconName = focused ? user : user;
                            foucedIconColor = focused ? white : darkGrey;
                            compoentName = 'Profile';
                        }
                        return(
                            <View style={{justifyContent:'center', alignItems:'center', paddingTop:10}}>
                                 <Image style={{width:22, height:19}} source={iconName} resizeMode="contain" />      
                                 <Text style={{color:'#fff', fontSize:12,paddingBottom:5, paddingTop:5}}>{compoentName}</Text>
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

