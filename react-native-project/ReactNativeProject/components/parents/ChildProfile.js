import React from 'react';
import { 
    findNodeHandle,
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    FlatList,
    Animated
} from 'react-native';
const {width, height} = Dimensions.get('screen');

import Dami1 from '../Dami1';   
import Dami2 from '../Dami2';   

const card1 = require('../images/profile/card1.png');
const chevronLeft = require('../images/profile/chevron-left.png');
const cyberspace = require('../images/profile/cyberspace.png');
const diamond = require('../images/profile/diamond.png');
const lawnMower = require('../images/profile/lawnMower.png');
const lucas = require('../images/profile/lucas.png');
const planet1 = require('../images/profile/planet1.png');
const planet2 = require('../images/profile/planet2.png');
const star = require('../images/profile/star.png');
const wrench = require('../images/profile/wrench.png');

const components = {
    first: 'Superskills',
    second: 'Mission',
    third: 'Statistics'
}

const data = Object.entries(components).map((i) => ({
    key: i[0],
    title: i[1],
    ref: React.createRef()
}));

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

const Tab = React.forwardRef(({item, measureLength, onItemPress}, ref) => {
    console.log(measureLength);
    return(
        <TouchableOpacity onPress={onItemPress} style={{paddingRight:20}}>
            <View ref={ref}>
                <Text style={[measureLength>0?{color:'#000037'}:{color:'#767687'}, {fontSize:16, fontWeight:'500'}]}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
})
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
        <View style={{position:'absolute', width}}>
            <View 
                ref={containerRef}
                style={{flexDirection:'row'}}>
                {data.map((item, index) => {
                    return(
                        <Tab key={item.key} item={item} ref={item.ref} measureLength={measures.length} onItemPress={() => onItemPress(index)} />
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
    updatePasswordWithApi = (testing) => {
        switch(testing) {
            case 'first' :
                return <Dami1 />
            case 'second' : 
                return <Dami2 />    
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
                >
                    <Image style={{width:12, height:12}} source={chevronLeft} />
                </TouchableOpacity>
                
                <View style={{paddingLeft:15, paddingRight:15, paddingTop:24}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'#fff', fontSize:28,fontWeight:'bold'}}>Lucas</Text>
                        </View>
                        <View style={{marginTop:3, flexDirection:'row', alignItems:'center'}}>
                            <Image
                                style={{width:32, height:32}}
                                source={lucas}
                            />
                            <Image style={{width:13, height:13,  marginLeft:12}} source={wrench} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:7}}>
                        <Image style={{width:17, height:17, marginRight:7}} source={diamond} resizeMode="contain" />
                        <Text style={{color:'#C8C8D4', fontSize:16, paddingRight:2}}>50 XP</Text>
                        <Image style={{width:17, height:17, marginRight:7, marginLeft:7}} source={star} resizeMode="contain" />
                        <Text style={{color:'#C8C8D4', fontSize:15}}>Lvl 1</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:21}}>
                        <Text style={{color:'#FFF', fontSize:16, paddingRight:2}}>50 XP needed to next level!</Text>
                        <Text style={{color:'#C8C8D4', fontSize:15}}>Lvl 2</Text>
                    </View>
                    <View style={{ position:'relative', marginTop:7}}>
                        <View style={{borderColor:'#4C4C73', backgroundColor:'#4C4C73', height:13, borderRadius:8}}>
                            <View style={[ {width:'80%', position:'absolute', height:13,zIndex: 3, borderRadius:8, backgroundColor:'#46E68C'}]}>
                            </View>    
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{position:'relative', marginTop:15, marginLeft:15}}>
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
                        return <View style={{width, height}}>
                                {updatePasswordWithApi(item.key)}
                            </View>        
                    }}    
                />
                <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
            </View>
            
        </View>    
    );
}