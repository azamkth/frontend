import React from 'react';
import { 
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const card1 = require('../images/profile/card1.png');
const chevronLeft = require('../images/profile/chevron-left.png');
const cyberspace = require('../images/profile/cyberspace.png');
const diamond = require('../images/profile/diamond.png');
const lawnMower = require('../images/profile/lawnMower.png');
const lucas = require('../images/profile/lucas.png');
const planet1 = require('../images/profile/planet1.png');
const planet2 = require('../images/profile/planet2.png');
const star = require('../images/profile/star.png');
const wrench = require('../images/profile/wrench.png');


export default function ChildProfile(props) {
    return (
        <View style={{}}>
            <ImageBackground
                resizeMode="contain"
                style={[{height: 230}]}
                source={cyberspace}
            >
                <TouchableOpacity
                    style={{paddingLeft:15, marginTop:54}}
                >
                    <Image style={{width:12, height:12}} source={chevronLeft} />
                </TouchableOpacity>
                
                <View style={{paddingLeft:15, paddingRight:15, paddingTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'#fff', fontSize:28,fontWeight:'bold'}}>Lucas</Text>
                        </View>
                        <View style={{marginTop:3, flexDirection:'row', alignItems:'center'}}>
                            <Image
                                style={{width:32, height:32}}
                                source={lucas}
                            />
                            <Image style={{width:13, height:13,  marginLeft:12}} source={wrench} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:7}}>
                        <Image style={{width:17, height:17, marginRight:7}} source={diamond} resizeMode="contain" />
                        <Text style={{color:'#C8C8D4', fontSize:16, paddingRight:2}}>50 XP</Text>
                        <Image style={{width:17, height:17, marginRight:7, marginLeft:7}} source={star} resizeMode="contain" />
                        <Text style={{color:'#C8C8D4', fontSize:15}}>Lvl 1</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:21}}>
                        <Text style={{color:'#FFF', fontSize:16, paddingRight:2}}>50 XP needed to next level!</Text>
                        <Text style={{color:'#C8C8D4', fontSize:15}}>Lvl 2</Text>
                    </View>
                    <View style={{ position:'relative', marginTop:7}}>
                        <View style={{borderColor:'#4C4C73', backgroundColor:'#4C4C73', height:13, borderRadius:8}}>
                            <View style={[ {width:'80%', position:'absolute', height:13,zIndex: 3, borderRadius:8, backgroundColor:'#46E68C'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>    
    );
}