import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image
} from 'react-native';

const planet1 = require('../images/profile/planet1.png');
const planet2 = require('../images/profile/planet2.png');

export default function SupperSkills(props) {
    return (
        <View style={{ marginTop:39}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#000037', paddingBottom:14}}>SupperSkills Adventure</Text>
            <ScrollView 
                showsHorizontalScrollIndicator={false} 
                horizontal={true} 
            >
                <View style={styles.boxContainer}>
                    <View style={styles.smallBox}>
                        <Image style={{width:60, height:60}} source={planet1} />
                    </View>
                    <View style={[styles.flexCol,{marginTop:7}]}>
                        <Text style={[styles.textXl, styles.textCenter, styles.textPrimary100]}>1. What is money really?</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>25 XP</Text>
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.smallBox}>
                        <Image style={{width:60, height:60}} source={planet2} />
                    </View>
                    <View style={[styles.flexCol,{marginTop:7}]}>
                        <Text style={[styles.textXl, styles.textCenter, styles.textPrimary100]}>2. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.smallBox}>
                        
                    </View>
                    <View style={[styles.flexCol,{marginTop:7}]}>
                        <Text style={[styles.textXl, styles.textCenter, styles.textPrimary100]}>3. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>    
                <View style={styles.boxContainer}>
                    <View style={styles.smallBox}>
                        
                    </View>
                    <View style={[styles.flexCol,{marginTop:7}]}>
                        <Text style={[styles.textXl, styles.textCenter, styles.textPrimary100]}>4. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>    
                <View style={styles.boxContainer}>
                    <View style={styles.smallBox}>
                        
                    </View>
                    <View style={[styles.flexCol,{marginTop:7}]}>
                        <Text style={[styles.textXl, styles.textCenter, styles.textPrimary100]}>5. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>    
                
                            
            </ScrollView>    
        </View>
        
    );
}
const neutral100 = '#ffffff';
const primary100  = '#000037';
const primary200  = '#262652';
const primary300  = '#333755';
const primary400  = '#4C4C73';
const primary500  = '#9B9BAA';
const primary600  = '#C8C8D4';

const primary700  =  '#5050FF';
const green100  =  '#46E68C';

const styles = StyleSheet.create({
    boxContainer: {
        marginRight:11, 
        width:142, 
        alignItems:'center'
    },
    textCenter:{
        textAlign:'center', 
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
    textPrimary100:{
        color:primary100,
    },
    textPrimary200: {
        color: primary200,
    },
    textPrimary400: {
        color: primary500,
    },
    textPrimary600: {
        color: primary600,
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
    smallBox: {
        paddingLeft:41, 
        paddingRight:41, 
        backgroundColor:primary100, 
        borderRadius:15, 
        paddingTop:17, 
        paddingBottom:17,
        width:142, 
        height:94
    }

    
    
});