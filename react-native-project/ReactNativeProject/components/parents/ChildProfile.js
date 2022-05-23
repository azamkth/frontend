import React from 'react';
import { 
    findNodeHandle,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Animated
} from 'react-native';

import Dammy from '../common/Dammy';   
import FinancialBadge from './FinancialBadge';
import {globalStyles} from '../styles/global';
import SupperSkills from './SupperSkills';   

const {width, height} = Dimensions.get('screen');
const chevronLeft = require('../images/profile/chevron-left.png');
const cyberspace = require('../images/profile/cyberspace.png');
const diamond = require('../images/profile/diamond.png');
const lucas = require('../images/profile/lucas.png');
const star = require('../images/profile/star.png');
const wrench = require('../images/profile/wrench.png');

const tabViewComponents = {
    first: 'Superskills',
    second: 'Mission',
    third: 'Statistics'
}

const data = Object.entries(tabViewComponents).map((i) => ({
    key: i[0],
    title: i[1],
    ref: React.createRef()
}));


/* Tabbar indicator */
const Indicator = ({measures, scrollX}) => {
    const inputRange = data.map((_,i) => i * width);
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map((measure)=> measure.width)
    });
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measures.map((measure)=> measure.x)
    });
    return (
        <Animated.View 
            style={{
                position:'absolute', 
                height:2, 
                width:indicatorWidth, 
                bottom:-1, 
                backgroundColor:'#000037',
                left:0,
                transform:[{
                    translateX
                }]
            }}
        >
        </Animated.View>
    )
}

/* Tabbar item Tab */
const Tab = React.forwardRef(({item, onItemPress}, ref) => {
    return(
        <TouchableOpacity onPress={onItemPress} style={{paddingRight:20}}>
            <View ref={ref}>
                <Text style={[{color:'#000037',fontSize:16, fontWeight:'500'}]}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
})

/* Tabbar Tabs */
const Tabs = ({data, scrollX, onItemPress}) => {
    const [measures, setMmeasures] = React.useState([])
    const containerRef = React.useRef();
    React.useEffect(() =>{
        let m = [];
        data.forEach(item => {
            item.ref.current.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    m.push({
                        x, y, width, height
                    });
                    if(m.length === data.length){
                        setMmeasures(m);
                    }
                });
        })
    }, [])

    return(
        <View style={{position:'absolute', width, marginLeft:13}}>
            <View 
                ref={containerRef}
                style={{flexDirection:'row'}}>
                {data.map((item, index) => {
                    return(
                        <Tab key={item.key} item={item} ref={item.ref}  onItemPress={() => onItemPress(index)} />
                    )        
                })}
            </View>
            {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} />}
        </View>
    )
}

export default function ChildProfile(props) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef();
    
    renderItemComponent = (itemKey) => {
        switch(itemKey) {
            case 'first' :
                return <SupperSkills />
            case 'second' : 
                return <Dammy />    
        }
    };

    const onItemPress = React.useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset:itemIndex * width,
        })
    })

    return (
        <View style={{}}>
            <ImageBackground
                resizeMode="contain"
                style={[{height: 230}]}
                source={cyberspace}
            >
                <TouchableOpacity
                    style={{paddingLeft:15, marginTop:54}}
                    onPress={() => props.navigation.pop()}
                >
                    <Image style={{width:12, height:12}} source={chevronLeft} />
                </TouchableOpacity>
                
                <View style={{paddingLeft:15, paddingRight:15, paddingTop:24}}>
                    <View style={[globalStyles.flexRow, globalStyles.justifyBetween]}>
                        <View>
                            <Text style={[globalStyles.textNeutral100, globalStyles.fontBold,{fontSize:28}]}>Lucas</Text>
                        </View>
                        <View style={[globalStyles.flexRow, globalStyles.itemsCenter,{marginTop:3}]}>
                            <Image
                                style={{width:32, height:32}}
                                source={lucas}
                            />
                            <Image style={{width:13, height:13,  marginLeft:12}} source={wrench} />
                        </View>
                    </View>
                    <View style={[globalStyles.flexRow, globalStyles.itemsCenter, {marginTop:7}]}>
                        <Image style={{width:17, height:17, marginRight:7}} source={diamond} resizeMode="contain" />
                        <Text style={[globalStyles.textPrimary600,globalStyles.textXl, {paddingRight:2}]}>50 XP</Text>
                        <Image style={{width:17, height:17, marginRight:7, marginLeft:7}} source={star} resizeMode="contain" />
                        <Text style={[globalStyles.textPrimary600,globalStyles.textXl]}>Lvl 1</Text>
                    </View>
                    <View style={[globalStyles.flexRow, globalStyles.justifyBetween, {marginTop:21}]}>
                        <Text style={[globalStyles.textNeutral100,globalStyles.textXl,{paddingRight:2}]}>50 XP needed to next level!</Text>
                        <Text style={[globalStyles.textPrimary600,globalStyles.textXl]}>Lvl 2</Text>
                    </View>
                    <View style={{ position:'relative', marginTop:7}}>
                        <View style={[globalStyles.progressBarWrapper,{height:13}]}>
                            <View style={[globalStyles.progressBar,{width:'80%', height:13}]}>
                            </View>    
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{position:'relative', marginTop:15}}>
                <Animated.FlatList
                    ref={ref}
                    data={data}
                    keyExtractor={item=> item.key}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset:{x: scrollX}}}],
                        {useNativeDriver:false}
                    )}
                    bounces={false}
                    renderItem={({item}) => {
                        return <View style={{width}}>
                                {renderItemComponent(item.key)}
                            </View>        
                    }}    
                />
                <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
            </View>
            <View style={{marginTop:12}}>
                <FinancialBadge />
            </View>
        </View>    
    );
}