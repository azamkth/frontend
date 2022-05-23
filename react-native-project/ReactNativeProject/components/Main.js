import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParentTabs from './parents/ParentTabs';
import ChildTabs from './childrens/ChildTabs';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.primaryBtn}
                onPress={() => props.navigation.navigate('ParentTabs')}
            >
                <Text style={styles.btnTxt}>Parent</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.primaryBtn, {marginTop:20}]}
                onPress={() => props.navigation.navigate('ChildTabs')}
            >
                <Text style={styles.btnTxt}>Children</Text>
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

const white = '#ffffff';
const darkBlue = '#262652';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor: darkBlue,
    },
    primaryBtn: {
        width:120, 
        padding:8, 
        borderColor:white, 
        borderWidth:1, 
        borderRadius:8
    },
    btnTxt: {
        color:'#fff', 
        textAlign:'center'
    }
});

 
