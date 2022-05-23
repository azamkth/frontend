import React from 'react';
import { 
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

import {Colors} from '../styles/colors';
import {globalStyles} from '../styles/global';

const card1 = require('../images/profile/card1.png');
const lawnMower = require('../images/profile/planet2.png');


export default function FinancialBadge() {
    return (
        <View style={{ marginTop:39}}>
            <Text style={[globalStyles.fontBold, globalStyles.textPrimary100 ,{fontSize:20, paddingBottom:14, paddingLeft:13}]}>
                Financial Badge
            </Text>
            <ScrollView 
                showsHorizontalScrollIndicator={false} 
                horizontal={true} 
                style={{paddingLeft:13}}
            >
                <View style={globalStyles.boxContainer}>
                    <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary800}]}>
                        <Image style={{width:60, height:60}} source={card1} />
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>Card test</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textFail, {paddingTop:7}]}>Failed!</Text>
                    </View>
                </View>
                <View style={globalStyles.boxContainer}>
                    <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary800}]}>
                        <Image style={{width:60, height:60}} source={lawnMower} />
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>Earn test</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textSuccess, {paddingTop:7}]}>Success!</Text>
                    </View>
                </View>
                <View style={globalStyles.boxContainer}>
                    <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary800}]}>
                        
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>Testing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>    
                <View style={globalStyles.boxContainer}>
                    <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary800}]}>
                        
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>Testing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>    
                <View style={globalStyles.boxContainer}>
                    <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary800}]}>
                        
                    </View>
                    <View style={[globalStyles.flexCol,{marginTop:7}]}>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>Testing</Text>
                        <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>0 XP</Text>
                    </View>
                </View>    
            </ScrollView>    
        </View>
    );
}