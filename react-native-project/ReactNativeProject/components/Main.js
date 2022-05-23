import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParentTabs from './parents/ParentTabs';
import ChildTabs from './childrens/ChildTabs';

function HomeScreen(props) {
    return (
        <View>
            <SafeAreaView>
                <TouchableOpacity 
                    onPress={() => props.navigation.navigate('ParentTabs')}
                >
                    <Text style={{color:'#000'}}>Parents</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => props.navigation.navigate('ChildTabs')}
                >
                    <Text style={{color:'#000'}}>Children</Text>
                </TouchableOpacity>
            </SafeAreaView>
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
                    name="ParentTabs"
                    component={ParentTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChildTabs"
                    component={ChildTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

 
