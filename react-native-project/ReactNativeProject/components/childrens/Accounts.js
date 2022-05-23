import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import {Colors} from '../styles/colors';
import {globalStyles} from '../styles/global';

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
                 <View style={{flex:1}}>
                    <View style={{paddingLeft:15}}>
                        <Text style={[globalStyles.text2Xl, globalStyles.fontBold, globalStyles.textNeutral100]}>Piggybank</Text>
                    </View>
                    <View style={[globalStyles.flexRow,{marginTop:5, paddingLeft:15}]}>
                        <Text style={[globalStyles.textNeutral100, globalStyles.fontBold, {fontSize:58, paddingRight:1}]}>500</Text>
                        <Text style={[globalStyles.textNeutral100,{ fontSize: 20, lineHeight: 40, textTransform:'uppercase' }]}>kr</Text>
                    </View>   
                </View>
                <Image style={{width:400, height:350}} source={piggybankLevel3} resizeMode="contain" />
                <View style={[globalStyles.justifyEnd, {paddingLeft:13, paddingRight:15}]}>
                    <View style={[globalStyles.flexRow, globalStyles.justifyEnd]}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Accounts</Text>
                        <Image style={{width:17, height:17, marginTop:2, marginLeft:7}} source={chevronRight} resizeMode="contain" />
                    </View>

                    <View style={{marginTop:18, backgroundColor:'#262652', borderRadius:15, paddingBottom:12, marginBottom:15}}>
                        <View style={{ position:'relative'}}>
                            <View style={[globalStyles.progressBarWrapper, {height:13, borderTopRightRadius:8,borderTopLeftRadius:8,borderBottomRightRadius:0,borderBottomLeftRadius:0}]}>
                                <View style={[globalStyles.progressBar, {width:'80%',height:13, borderBottomLeftRadius:0}]}>
                                </View>    
                            </View>
                        </View>
                        <View style={{paddingLeft:13, paddingRight:13,}}>
                            <View style={[globalStyles.flexRow, globalStyles.justifyBetween]}>
                                <View style={{marginTop:10 }}>
                                    <View>
                                        <Text style={[globalStyles.textNeutral100, globalStyles.textXl, globalStyles.fontBold]}>Next allowance</Text>
                                    </View>
                                    <View style={{marginTop:3}}>
                                        <Text style={[globalStyles.textLg, globalStyles.fontMedium, globalStyles.textPrimary500]}>in 6 days</Text>
                                    </View>
                                </View>
                                <View style={[globalStyles.flexRow, globalStyles.itemsCenter]}>
                                    <View style={globalStyles.flexRow}>
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