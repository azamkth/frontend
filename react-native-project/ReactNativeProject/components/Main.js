import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
 
import {Colors} from './styles/colors';
import ChildTabs from './childrens/ChildTabs';
import ParentTabs from './parents/ParentTabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor: Colors.primary200,
    },
    primaryBtn: {
        width:120, 
        padding:8, 
        borderColor:Colors.neutral100, 
        borderWidth:1, 
        borderRadius:8
    },
    btnTxt: {
        color:Colors.neutral100, 
        textAlign:'center'
    }
});

 
