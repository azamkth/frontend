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

const cyberspaceFull = require('../images/child/cyberspace-full.png');
const chevronRight = require('../images/child/chevron-right.png');
const piggybankLevel3 = require('../images/child/piggybank-level3.png');


export default function Accounts(props) {
    return (
        <ImageBackground
            resizeMode="cover"
            style={[{flex: 1,}]}
            source={cyberspaceFull}
        >
            <View style={[{flex: 1, paddingTop:82}]}>
                 <View style={{flex: 1,justifyContent:'flex-start',}}>
                    <View style={{paddingLeft:15}}>
                        <Text style={{color:'#fff', fontSize:32, fontWeight:'bold'}}>Piggybank</Text>
                    </View>
                    <View style={{marginTop:5, flexDirection:'row',paddingLeft:15}}>
                        <Text style={{color:'#fff', fontSize:58, fontWeight:'bold', paddingRight:1}}>500</Text>
                        <Text style={{ color:'#fff', fontSize: 20, lineHeight: 40, textTransform:'uppercase' }}>kr</Text>
                    </View>   
                </View>
                <View style={{justifyContent:'center',}}>
                    <Image style={{width:400, height:350}} source={piggybankLevel3} resizeMode="contain" />
                </View>
                <View style={{justifyContent:'flex-end', paddingLeft:13, paddingRight:15}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Accounts</Text>
                        <Image style={{width:17, height:17, marginTop:2, marginLeft:7}} source={chevronRight} resizeMode="contain" />
                    </View>

                    <View style={{marginTop:18, backgroundColor:'#262652', borderRadius:15, paddingBottom:12, marginBottom:15}}>
                        <View style={{ position:'relative'}}>
                            <View style={{borderColor:'#4C4C73', backgroundColor:'#4C4C73', height:13, borderTopRightRadius:8,borderTopLeftRadius:8}}>
                                <View style={[ {width:'80%', position:'absolute', height:13,zIndex: 3, borderTopRightRadius:8,borderTopLeftRadius:8,borderBottomRightRadius:8, backgroundColor:'#46E68C'}]}>
                                </View>    
                            </View>
                        </View>
                        <View style={{paddingLeft:13, paddingRight:13,}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <View style={{marginTop:10 }}>
                                    <View>
                                        <Text style={{color:'#fff', fontSize:16,fontWeight:'bold'}}>Next allowance</Text>
                                    </View>
                                    <View style={{marginTop:3}}>
                                        <Text style={{color:'#9B9BAA', fontSize:14,fontWeight:'500', }}>in 6 days</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{flexDirection:'row',}}>
                                        <Text style={{color:'#fff', fontSize:30, paddingRight:2}}>+ 35</Text>
                                        <Text style={{color:'#fff', fontSize:12,lineHeight: 23}}>kr</Text>
                                    </View>
                                    <Image style={{width:17, height:17,  marginLeft:7}} source={chevronRight} resizeMode="contain" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </ImageBackground>
        
    );
}