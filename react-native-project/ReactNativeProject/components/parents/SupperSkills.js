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
const piggybankLevel3 = require('../images/child/piggybank-level3.png');

export default function SupperSkills(props) {
    return (
        <View style={{ marginTop:39}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#000037', paddingBottom:14}}>SupperSkills Adventure</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} 
                >
                <View style={{borderColor:'#000', marginRight:11, width:142, alignItems:'center'}}>
                    <View style={{
                        paddingLeft:41, 
                        paddingRight:41, 
                        backgroundColor:'#000037', 
                        borderRadius:15, 
                        paddingTop:17, 
                        paddingBottom:17,
                        
                    }}>
                        <Image style={{width:60, height:60}} source={planet1} />
                    </View>
                    <View style={{flexDirection:'column', marginTop:7}}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#000037'}}>1. What is money really?</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>25 XP</Text>
                    </View>
                </View>
                <View style={{borderColor:'#000', marginRight:11, width:142, alignItems:'center'}}>
                    <View style={{
                        paddingLeft:41, 
                        paddingRight:41, 
                        backgroundColor:'#000037', 
                        borderRadius:15, 
                        paddingTop:17, 
                        paddingBottom:17,
                        
                    }}>
                        <Image style={{width:60, height:60}} source={planet2} />
                    </View>
                    <View style={{flexDirection:'column', marginTop:7}}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#000037'}}>2. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>
                <View style={{borderColor:'#000', marginRight:11, width:142, alignItems:'center'}}>
                    <View style={{
                        paddingLeft:41, 
                        paddingRight:41, 
                        backgroundColor:'#9B9BAA', 
                        borderRadius:15, 
                        paddingTop:17, 
                        paddingBottom:17,
                        width:142, 
                        height:94
                        
                    }}>
                        
                    </View>
                    <View style={{flexDirection:'column', marginTop:7}}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#9B9BAA'}}>3. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>    
                <View style={{borderColor:'#000', marginRight:11, width:142, alignItems:'center'}}>
                    <View style={{
                        paddingLeft:41, 
                        paddingRight:41, 
                        backgroundColor:'#9B9BAA', 
                        borderRadius:15, 
                        paddingTop:17, 
                        paddingBottom:17,
                        width:142, 
                        height:94
                        
                    }}>
                        
                    </View>
                    <View style={{flexDirection:'column', marginTop:7}}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#9B9BAA'}}>4. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>    
                <View style={{borderColor:'#000', marginRight:11, width:142, alignItems:'center'}}>
                    <View style={{
                        paddingLeft:41, 
                        paddingRight:41, 
                        backgroundColor:'#9B9BAA', 
                        borderRadius:15, 
                        paddingTop:17, 
                        paddingBottom:17,
                        width:142, 
                        height:94
                        
                    }}>
                        
                    </View>
                    <View style={{flexDirection:'column', marginTop:7}}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#9B9BAA'}}>5. Cost & pricing</Text>
                        <Text style={{textAlign:'center', fontSize:16, paddingTop:7, color:'#9B9BAA'}}>0 XP</Text>
                    </View>
                </View>    
                
                            
            </ScrollView>    
        </View>
        
    );
}