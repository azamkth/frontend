import React from 'react';
import { 
    View,
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Children(props) {
    return (
        <View style={{backgroundColor:'#000037', flex:1, paddingTop:75, paddingLeft:20, paddingRight:20}}>
            <View style={{flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#fff'}}>
                <Text style={{color:'#fff', fontSize:32,fontWeight:'bold'}}>Lucas</Text>
                <Icon name={'chevron-right'} size={20} color={'#fff'} style={{paddingTop:6}} light />
            </View>
            
        </View>    
    );
}