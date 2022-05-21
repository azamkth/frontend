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

const sxlImage = require('../images/parent/lucas.png');
const bank = require('../images/parent/bank.png');


export default function Children(props) {
    return (
        <View style={{backgroundColor:'#000037', flex:1, paddingTop:75, paddingLeft:14, paddingRight:14, position:'relative'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:'#fff', fontSize:32,fontWeight:'bold'}}>Lucas</Text>
                    <Icon name={'chevron-right'} size={20} color={'#fff'} style={{paddingTop:8, paddingLeft:8}} light />
                </View>
                <View>
                    <Image
                        style={{width:34, height:34}}
                        source={sxlImage}
                    />
                </View>
            </View>
            <View style={{marginTop:18, paddingLeft:13, paddingRight:13, backgroundColor:'#262652', borderRadius:15, paddingTop:13, paddingBottom:12}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{ }}>
                        <Text style={{color:'#fff', fontSize:16,fontWeight:'bold'}}>Bank account</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#fff', fontSize:12,fontWeight:'bold', paddingTop:5, paddingRight:2}}>€</Text>
                        <Text style={{color:'#fff', fontSize:30}}>140</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{width:42, height:42, justifyContent:'center', alignItems:'center'  }}>
                        <Image
                            style={{width:34, height:34}}
                            source={bank}
                        />
                    </View>
                    <View style={{flexDirection:'row', marginTop:21, alignItems:'center'}}>
                        <Icon name={'circle'} size={10} color={'#46E68C'} style={{paddingRight:7}} />
                        <Text style={{color:'#9B9BAA', fontSize:14}}>Active</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:18, paddingLeft:13, paddingRight:13, backgroundColor:'#262652', borderRadius:15, paddingTop:18, paddingBottom:18}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{ }}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Next allowance</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ color:'#fff', fontSize: 14}}>in 6 days</Text>
                        <Text style={{ color:'#fff', fontSize: 16, fontWeight:'bold', paddingLeft:4, paddingRight:2 }}>30</Text>
                        <Text style={{ color:'#fff', fontSize: 9, lineHeight: 16, textTransform:'uppercase' }}>kr</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:18, }}>
                <View style={{flex:0.5,paddingLeft:13, paddingRight:13, backgroundColor:'#262652', borderRadius:15, paddingTop:18, paddingBottom:18, marginRight:13}}>
                    <View style={{ }}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Goal</Text>
                    </View>
                    <View style={{paddingTop:11 }}>
                        <Text style={{color:'#9B9BAA', fontSize:14, fontWeight:'bold'}}>Not set</Text>
                    </View>
                    <View style={{paddingTop:14, position:'relative'}}>
                        <View style={{borderColor:'#4C4C73', backgroundColor:'#4C4C73', height:7, borderRadius:8}}>
                            <View style={[ {width:'0%', position:'absolute', height:7,zIndex: 3, borderRadius:8, backgroundColor:'#46E68C'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
                <View style={{flex:0.5,paddingLeft:13, paddingRight:13, backgroundColor:'#262652', borderRadius:15, paddingTop:18, paddingBottom:18}}>
                    <View style={{ }}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>Chores</Text>
                    </View>
                    <View style={{paddingTop:11 }}>
                        <Text style={{color:'#9B9BAA', fontSize:14, fontWeight:'bold'}}>9/10 approved</Text>
                    </View>
                    <View style={{paddingTop:14, position:'relative'}}>
                        <View style={{borderColor:'#4C4C73', backgroundColor:'#4C4C73', height:7, borderRadius:8}}>
                            <View style={[ {width:'80%', position:'absolute', height:7,zIndex: 3, borderRadius:8, backgroundColor:'#46E68C'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={{flex:1, justifyContent:'flex-end', paddingBottom:95 }}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{width:39, height:39, backgroundColor:'#5050FF', justifyContent:'center', alignItems:'center', borderRadius:999}}>
                        <Icon name={'plus'} size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{color:'#fff', fontSize:16,fontWeight:'bold', paddingTop:16}}>Add a child</Text>
                    </View>
                </View>
            </View>
        </View>    
    );
}