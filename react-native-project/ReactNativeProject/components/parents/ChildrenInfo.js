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


const lucas = require('../images/parent/lucas.png');
const bank = require('../images/parent/bank.png');
const starRainbow = require('../images/parent/starRainbow.png');

export default function ChildrenInfo(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.justifyBetween, styles.flexRow, styles.itemsCenter]}>
                <View style={[styles.flexRow, styles.itemsCenter]}>
                    <Text style={styles.heading}>Lucas</Text>
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
            <View style={[styles.greyBox, {marginTop:18}]}>
                <View style={[styles.flexRow, styles.justifyBetween]}>
                    <View>
                        <Text style={[styles.textNeutral100, styles.text2Xl, styles.fontBold]}>Bank account</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Text style={[styles.textNeutral100,styles.fontBold, styles.textBase, {lineHeight: 20}]}>€</Text>
                        <Text style={[styles.textNeutral100,{fontSize:30}]}>140</Text>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.justifyBetween]}>
                    <View style={[styles.itemsCenter,styles.justifyCenter, {width:42, height:42}]}>
                        <Image
                            style={{width:34, height:34}}
                            source={bank}
                        />
                    </View>
                    <View style={[styles.flexRow, styles.itemsCenter, {marginTop:21}]}>
                        <Icon name={'circle'} size={10} color={green100} style={{paddingRight:7}} />
                        <Text style={[styles.textPrimary500, styles.textLg]}>Active</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.greyBox, {marginTop:18, paddingTop:18, paddingBottom:18}]}>
                <View style={[styles.flexRow, styles.justifyBetween]}>
                    <View>
                        <Text style={[styles.textXl, styles.textNeutral100, styles.fontBold]}>Next allowance</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Text style={{ color:'#fff', fontSize: 14}}>in 6 days</Text>
                        <Text style={[styles.textXl, styles.textNeutral100, styles.fontBold,{ paddingLeft:4, paddingRight:2 }]}>30</Text>
                        <Text style={[styles.textNeutral100, {fontSize: 9, lineHeight: 16, textTransform:'uppercase' }]}>kr</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.flexRow, {marginTop:18, }]}>
                <View style={[styles.greyBox, {flex:0.5,paddingTop:18, paddingBottom:18, marginRight:13}]}>
                    <View>
                        <Text style={[styles.textNeutral100, styles.textXl, styles.fontBold]}>Goal</Text>
                    </View>
                    <View style={{paddingTop:11 }}>
                        <Text style={[styles.textPrimary500, styles.textLg, styles.fontBold]}>Not set</Text>
                    </View>
                    <View style={{paddingTop:14, position:'relative'}}>
                        <View style={[styles.progressBarWrapper]}>
                            <View style={[styles.progressBar,{width:'0%'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
                <View style={[styles.greyBox, {flex:0.5,paddingTop:18, paddingBottom:18}]}>
                    <View>
                        <Text style={[styles.textNeutral100, styles.textXl, styles.fontBold]}>Chores</Text>
                    </View>
                    <View style={{paddingTop:11 }}>
                        <Text style={[styles.textPrimary500, styles.textLg, styles.fontBold]}>9/10 approved</Text>
                    </View>
                    <View style={{paddingTop:14, position:'relative'}}>
                        <View style={[styles.progressBarWrapper]}>
                            <View style={[styles.progressBar,{width:'80%'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.justifyEnd,{flex:1, paddingBottom:95}]}>
                <View style={styles.itemsCenter}>
                    <TouchableOpacity 
                        onPress={()=> alert('Dammy CTA')}
                        style={[styles.justifyCenter, styles.itemsCenter,{width:39, height:39, backgroundColor:primary700, borderRadius:999}]}
                    >
                        <Icon name={'plus'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <View>
                        <Text style={[styles.textNeutral100, styles.textXl, styles.fontBold,{paddingTop:16}]}>Add a child</Text>
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

const neutral100 = '#ffffff';
const primary100  = '#000037';
const primary200  = '#262652';
const primary300  = '#333755';
const primary400  = '#4C4C73';
const primary500  = '#9B9BAA';

const primary700  =  '#5050FF';
const green100  =  '#46E68C';

const styles = StyleSheet.create({
    container: {
        flex:1, 
        position:'relative',
        paddingTop:75, 
        paddingLeft:14, 
        paddingRight:14, 
        backgroundColor:primary100, 
    },
    flexRow: {
        flexDirection:'row', 
    },
    flexCol: {
        flexDirection:'column', 
    },
    justifyBetween: {
        justifyContent:'space-between',
    },
    justifyCenter: {
        justifyContent:'center',
    },
    justifyEnd: {
        justifyContent:'flex-end',
    },
    itemsCenter:{
        alignItems:'center'
    },
    heading:{
        color:neutral100, 
        fontSize:32,
        fontWeight:'bold'
    },
    greyBox: {
        paddingLeft:13, 
        paddingRight:13, 
        backgroundColor:primary200, 
        borderRadius:15, 
        paddingTop:13, 
        paddingBottom:12
    },
    textPrimary200: {
        color: primary200,
    },
    textPrimary400: {
        color: primary500,
    },
    textPrimary500: {
        color: primary500,
    },
    textNeutral100: {
        color: neutral100,
    },
    fontBold: {
        fontWeight:'bold'
    },
    fontMedium: {
        fontWeight:500
    },
    textBase: {
        fontSize:12
    },
    textLg: {
        fontSize:14
    },
    textXl: {
        fontSize:16
    },
    text2Xl: {
        fontSize:32
    },
    progressBarWrapper:{
        borderColor:'#4C4C73', 
        backgroundColor:'#4C4C73', 
        height:7, 
        borderRadius:8

    },
    progressBar:{
        width:'0%', 
        position:'absolute', 
        height:7,
        zIndex: 3, 
        borderRadius:8, 
        backgroundColor:green100
    },

    
    
});