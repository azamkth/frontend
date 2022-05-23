/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
   StatusBar,
   View
} from 'react-native';
 
import Main from './components/Main';   

export default function App() {
    return (
        <View  style={{flex:1}}>
            <StatusBar barStyle={'light-content'} />
            <Main />
        </View>
    );
};
 
