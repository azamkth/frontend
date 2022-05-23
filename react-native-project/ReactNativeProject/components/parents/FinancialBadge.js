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

const badges = [
    {
        id: '1',
        title: 'Card test',
        image: card1,
        statusText:'Failed',
        status:false
    },
    {
        id: '2',
        title: 'Earn test',
        image: lawnMower,
        statusText:'Success',
        status:true
    },
    {
        id: '3',
        title: 'Card test',
        image: card1,
        statusText:'Failed',
        status:false
    },
    {
        id: '4',
        title: 'Earn test',
        image: lawnMower,
        statusText:'Success',
        status:true
    },
];

export default function FinancialBadge() {
    const financialBadge = badges.map(function (badge) {
        return (
            <View key={badge.id} style={globalStyles.boxContainer}>
                <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary800}]}>
                    <Image style={{width:60, height:60}} source={badge.image} />
                </View>
                <View style={[globalStyles.flexCol,{marginTop:7}]}>
                    <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>
                        {badge.title}¨
                    </Text>
                    <Text style={[badge.status?globalStyles.textSuccess:globalStyles.textFail, globalStyles.textXl, globalStyles.textCenter,  {paddingTop:7}]}>
                        {badge.statusText}
                    </Text>
                </View>
            </View>
        );  
    });
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
                {financialBadge}
            </ScrollView>    
        </View>
    );
}