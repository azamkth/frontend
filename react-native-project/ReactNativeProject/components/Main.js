import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Parents from './parents/Parents';
import Children from './childrens/Children';

function HomeScreen() {
    return (
        <View>
            <TouchableOpacity 
                onPress={() => alert('parents')}
            >
                <Text style={{color:'#000'}}>Parents</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => alert('Children')}
            >
                <Text style={{color:'#000'}}>Children</Text>
            </TouchableOpacity>
        </View>
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
                    name="Parents"
                    component={Parents}
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

 
