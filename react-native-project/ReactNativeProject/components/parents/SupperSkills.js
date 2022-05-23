import React from 'react';
import { 
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

import {globalStyles} from '../styles/global';
import {Colors} from '../styles/colors';

const planet1 = require('../images/profile/planet1.png');
const planet2 = require('../images/profile/planet2.png');

const skills = [
    {
        id: '1',
        title: 'What is money really?',
        image: planet1,
        description:'25 XP'
    },
    {
        id: '2',
        title: 'Cost & pricing',
        image: planet2,
        description:'0 XP'
    },
    {
        id: '3',
        title: 'What is money really?',
        image: planet1,
        description:'25 XP'
    },
    {
        id: '4',
        title: 'What is money really?',
        image: planet1,
        description:'25 XP'
    },
];

export default function SupperSkills() {
    const supperSkills = skills.map(function (skill) {
        return (
            <View key={skill.id} style={globalStyles.boxContainer}>
                <View style={[globalStyles.smallBox, {backgroundColor:Colors.primary100}]}>
                    <Image style={{width:60, height:60}} source={skill.image} />
                </View>
                <View style={[globalStyles.flexCol,{marginTop:7}]}>
                    <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary100]}>{skill.id}. {skill.title}</Text>
                    <Text style={[globalStyles.textXl, globalStyles.textCenter, globalStyles.textPrimary500, {paddingTop:7}]}>{skill.description}</Text>
                </View>
            </View>
        );  
    });    
    return (
        <View style={{ marginTop:39}}>
            <Text style={[globalStyles.fontBold, globalStyles.textPrimary100 ,{fontSize:20, paddingBottom:14, paddingLeft:13}]}>
                SupperSkills Adventure {globalStyles.neutral100}
            </Text>
            <ScrollView 
                showsHorizontalScrollIndicator={false} 
                horizontal={true} 
                style={{paddingLeft:13}}
            >
                {supperSkills}
            </ScrollView>    
        </View>
    );
}

