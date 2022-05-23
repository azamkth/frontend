import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
 
import {Colors} from './styles/colors';
import ChildTabs from './childrens/ChildTabs';
import ParentTabs from './parents/ParentTabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const gimiLogo = require('./images/gimi.jpeg');

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                style={{height:200, width:260}}
                source={gimiLogo}
            />
            <TouchableOpacity 
                style={[styles.primaryBtn, styles.btn]}
                onPress={() => props.navigation.navigate('ParentTabs')}
            >
                <Text style={styles.btnTxt}>Parent</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.secondaryBtn, styles.btn,{marginTop:30}]}
                onPress={() => props.navigation.navigate('ChildTabs')}
            >
                <Text style={[styles.btnTxt]}>Children</Text>
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

const styles = StyleSheet.create({
    container: {
       flex: 1,
       paddingTop:150,
       alignItems:'center',
       backgroundColor: Colors.primary100,
    },
    primaryBtn: {
        backgroundColor:Colors.primary200
    },
    secondaryBtn: {
        backgroundColor:Colors.primary300
    },
    btn:{
        width:250, 
        paddingTop:12, 
        paddingBottom:12, 
        borderRadius:20,
    },
    btnTxt: {
        color:Colors.neutral100, 
        fontSize:16,
        textAlign:'center',
        fontWeight:'500',
        letterSpacing:1
    }
});

 
