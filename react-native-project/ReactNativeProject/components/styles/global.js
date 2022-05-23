import { 
    StyleSheet,
} from 'react-native';

const neutral100 = '#ffffff';
const primary100  = '#000037';
const primary200  = '#262652';
const primary300  = '#333755';
const primary400  = '#4C4C73';
const primary500  = '#9B9BAA';
const primary600  = '#C8C8D4';
const primary700  =  '#5050FF';
const green100  =  '#46E68C';

export const globalStyles = StyleSheet.create({
    container: {
        flex:1, 
        position:'relative',
        paddingTop:75, 
        paddingLeft:14, 
        paddingRight:14, 
        backgroundColor:primary100, 
    },
    boxContainer: {
        marginRight:11, 
        width:142, 
        alignItems:'center'
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