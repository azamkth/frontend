import React from 'react';
import { 
    View,
    StyleSheet,
    Text
} from 'react-native';

export default function Children(props) {
    return (
        <View style={{backgroundColor:'#000037', flex:1}}>
            <Text style={{color:'#fff'}}>Hello i am Children</Text>
        </View>    
    );
}