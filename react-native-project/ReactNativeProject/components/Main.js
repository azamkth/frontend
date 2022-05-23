import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import ParentTabs from './parents/ParentTabs';
import Children from './childrens/Children';

function HomeScreen(props) {
    return (
        <SafeAreaView>
            <TouchableOpacity 
                onPress={() => props.navigation.navigate('ParentTabs')}
            >
                <Icon name="rocket" size={30} color="#900" />
                <Text style={{color:'#000'}}>Parents</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => props.navigation.navigate('Children')}
            >
                <Text style={{color:'#000'}}>Children</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
  }

const Stack = createNativeStackNavigator();
 
export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ParentTabs"
                    component={ParentTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Children"
                    component={Children}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

 
