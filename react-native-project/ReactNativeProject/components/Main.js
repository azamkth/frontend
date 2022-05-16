import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Parents from './parents/Parents';
import Children from './childrens/Children';

function HomeScreen(props) {
    return (
        <View>
            <TouchableOpacity 
                onPress={() => props.navigation.navigate('Parents')}
            >
                <Icon name="rocket" size={30} color="#900" />
                <Text style={{color:'#000'}}>Parents</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => props.navigation.navigate('Children')}
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

 
