import React from 'react';
import { 
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const sxlImage = require('../images/parent/lucas.png');
const bank = require('../images/parent/bank.png');
const starRainbow = require('../images/parent/starRainbow.png');


export default function ChildProfile(props) {
    return (
        <View style={{backgroundColor:'#000037', flex:1, paddingTop:75, paddingLeft:14, paddingRight:14, position:'relative'}}>
            <Text style={{color:'#fff'}}>hello I am profile</Text>
        </View>    
    );
}