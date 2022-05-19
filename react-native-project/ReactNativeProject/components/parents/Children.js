import React from 'react';
import { 
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const sxlImage = require('../images/parent/lucas.png');

export default function Children(props) {
    return (
        <View style={{backgroundColor:'#000037', flex:1, paddingTop:75, paddingLeft:14, paddingRight:14}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:'#fff', fontSize:32,fontWeight:'bold'}}>Lucas</Text>
                    <Icon name={'chevron-right'} size={20} color={'#fff'} style={{paddingTop:8, paddingLeft:8}} light />
                </View>
                <View>
                    <Image
                        style={{width:34, height:34}}
                        source={sxlImage}
                    />
                </View>
            </View>
            <View style={{marginTop:18, flexDirection:'row', justifyContent:'space-between', paddingLeft:13, paddingRight:13, backgroundColor:'#262652', borderRadius:15, paddingTop:13}}>
                <View style={{ }}>
                    <Text style={{color:'#fff', fontSize:16,fontWeight:'bold'}}>Bank account</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#fff', fontSize:12,fontWeight:'bold', paddingTop:5, paddingRight:2}}>€</Text>
                    <Text style={{color:'#fff', fontSize:30}}>140</Text>
                </View>
            </View>
        </View>    
    );
}