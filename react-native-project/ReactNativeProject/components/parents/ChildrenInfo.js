import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {globalStyles} from '../styles/global';
import {Colors} from '../styles/colors';

const lucas = require('../images/parent/lucas.png');
const bank = require('../images/parent/bank.png');
const starRainbow = require('../images/parent/starRainbow.png');

export default function ChildrenInfo(props) {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.justifyBetween, globalStyles.flexRow, globalStyles.itemsCenter]}>
                <View style={[globalStyles.flexRow, globalStyles.itemsCenter]}>
                    <Text style={[globalStyles.text2Xl, globalStyles.fontBold, globalStyles.textNeutral100]}>Lucas</Text>
                    <TouchableOpacity 
                        onPress={() => props.navigation.navigate('ChildProfile')}
                    >
                        <Icon name={'chevron-right'} size={20} color={'#fff'} style={{paddingTop:8, paddingLeft:8}} light />
                    </TouchableOpacity>
                </View>
                <Image
                    style={{width:34, height:34}}
                    source={lucas}
                />
            </View>
            <View style={[globalStyles.greyBox, {marginTop:18}]}>
                <View style={[globalStyles.flexRow, globalStyles.justifyBetween]}>
                    <View>
                        <Text style={[globalStyles.textNeutral100, globalStyles.text2Xl, globalStyles.fontBold]}>Bank account</Text>
                    </View>
                    <View style={globalStyles.flexRow}>
                        <Text style={[globalStyles.textNeutral100,globalStyles.fontBold, globalStyles.textBase, {lineHeight: 20}]}>€</Text>
                        <Text style={[globalStyles.textNeutral100,{fontSize:30}]}>140</Text>
                    </View>
                </View>
                <View style={[globalStyles.flexRow, globalStyles.justifyBetween]}>
                    <View style={[globalStyles.itemsCenter,globalStyles.justifyCenter, {width:42, height:42}]}>
                        <Image
                            style={{width:34, height:34}}
                            source={bank}
                        />
                    </View>
                    <View style={[globalStyles.flexRow, globalStyles.itemsCenter, {marginTop:21}]}>
                        <Icon name={'circle'} size={10} color={Colors.green100} style={{paddingRight:7}} />
                        <Text style={[globalStyles.textPrimary500, globalStyles.textLg]}>Active</Text>
                    </View>
                </View>
            </View>
            <View style={[globalStyles.greyBox, {marginTop:18, paddingTop:18, paddingBottom:18}]}>
                <View style={[globalStyles.flexRow, globalStyles.justifyBetween]}>
                    <View>
                        <Text style={[globalStyles.textXl, globalStyles.textNeutral100, globalStyles.fontBold]}>Next allowance</Text>
                    </View>
                    <View style={globalStyles.flexRow}>
                        <Text style={{ color:'#fff', fontSize: 14}}>in 6 days</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textNeutral100, globalStyles.fontBold,{ paddingLeft:4, paddingRight:2 }]}>30</Text>
                        <Text style={[globalStyles.textNeutral100, {fontSize: 9, lineHeight: 16, textTransform:'uppercase' }]}>kr</Text>
                    </View>
                </View>
            </View>
            <View style={[globalStyles.flexRow, {marginTop:18, }]}>
                <View style={[globalStyles.greyBox, {flex:0.5,paddingTop:18, paddingBottom:18, marginRight:13}]}>
                    <View>
                        <Text style={[globalStyles.textNeutral100, globalStyles.textXl, globalStyles.fontBold]}>Goal</Text>
                    </View>
                    <View style={{paddingTop:11 }}>
                        <Text style={[globalStyles.textPrimary500, globalStyles.textLg, globalStyles.fontBold]}>Not set</Text>
                    </View>
                    <View style={{paddingTop:14, position:'relative'}}>
                        <View style={[globalStyles.progressBarWrapper]}>
                            <View style={[globalStyles.progressBar,{width:'0%'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
                <View style={[globalStyles.greyBox, {flex:0.5,paddingTop:18, paddingBottom:18}]}>
                    <View>
                        <Text style={[globalStyles.textNeutral100, globalStyles.textXl, globalStyles.fontBold]}>Chores</Text>
                    </View>
                    <View style={{paddingTop:11 }}>
                        <Text style={[globalStyles.textPrimary500, globalStyles.textLg, globalStyles.fontBold]}>9/10 approved</Text>
                    </View>
                    <View style={{paddingTop:14, position:'relative'}}>
                        <View style={[globalStyles.progressBarWrapper]}>
                            <View style={[globalStyles.progressBar,{width:'80%'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
            </View>
            <View style={[globalStyles.justifyEnd,{flex:1, paddingBottom:95}]}>
                <View style={globalStyles.itemsCenter}>
                    <TouchableOpacity 
                        onPress={()=> alert('Dammy CTA')}
                        style={[globalStyles.justifyCenter, globalStyles.itemsCenter,{width:39, height:39, backgroundColor:Colors.primary700, borderRadius:999}]}
                    >
                        <Icon name={'plus'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <View>
                        <Text style={[globalStyles.textNeutral100, globalStyles.textXl, globalStyles.fontBold,{paddingTop:16}]}>Add a child</Text>
                    </View>
                    <View style={{position:'absolute', right:82, top:5}}>
                        <Image
                            style={{width:54, height:30}}
                            source={starRainbow}
                        />
                    </View>
                </View>
            </View>
        </View>    
    );
}

