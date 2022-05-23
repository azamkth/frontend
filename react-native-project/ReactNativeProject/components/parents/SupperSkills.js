import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image
} from 'react-native';

import {globalStyles} from '../styles/global';
const planet1 = require('../images/profile/planet1.png');
const planet2 = require('../images/profile/planet2.png');

export default function SupperSkills() {
    return (
        <View style={{ marginTop:39}}>
            <Text style={[globalStyles.fontBold, globalStyles.textPrimary100 ,{fontSize:20, paddingBottom:14, paddingLeft:13}]}>SupperSkills Adventure</Text>
            <ScrollView 
                showsHorizontalScrollIndicator={false} 
                horizontal={true} 
                style={{paddingLeft:13}}
            >
                <View style={globalStyles.boxContainer}>
                    <View style={globalStyles.smallBox}>
                        <Image style={{width:60, height:60}} source={planet1} />
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>1. What is money really?</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>25 XP</Text>
                    </View>
                </View>
                <View style={globalStyles.boxContainer}>
                    <View style={globalStyles.smallBox}>
                        <Image style={{width:60, height:60}} source={planet2} />
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>2. Cost & pricing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>
                <View style={globalStyles.boxContainer}>
                    <View style={globalStyles.smallBox}>
                        
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>3. Cost & pricing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>    
                <View style={globalStyles.boxContainer}>
                    <View style={globalStyles.smallBox}>
                        
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>4. Cost & pricing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>    
                <View style={globalStyles.boxContainer}>
                    <View style={globalStyles.smallBox}>
                        
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>5. Cost & pricing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>    
            </ScrollView>    
        </View>
        
    );
}

