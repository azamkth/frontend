import { 
    StyleSheet,
} from 'react-native';

import {Colors} from './colors';

export const globalStyles = StyleSheet.create({
    /* font weight */
    fontBold: {
        fontWeight:'bold'
    },
    fontMedium: {
        fontWeight:'500'
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
    /* Text color */
    textPrimary100:{
        color:Colors.primary100,
    },
    textPrimary200: {
        color:Colors.primary200,
    },
    textPrimary400: {
        color:Colors.primary500,
    },
    textPrimary600: {
        color:Colors.primary600,
    },
    textPrimary500: {
        color:Colors.primary500,
    },
    textNeutral100: {
        color:Colors.neutral100,
    },
    textNeutral100: {
        color:Colors.neutral100,
    },
    textSuccess: {
        color:Colors.green100,
    },
    textFail: {
        color:Colors.alert100,
    },
    /* flex and text align  */
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
    textCenter:{
        textAlign:'center'
    },
    /* progressbar */
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
        backgroundColor:Colors.green100
    },

    container: {
        flex:1, 
        position:'relative',
        paddingTop:75, 
        paddingLeft:14, 
        paddingRight:14, 
        backgroundColor:Colors.primary100, 
    },
    boxContainer: {
        marginRight:11, 
        width:142, 
        alignItems:'center'
    },
    greyBox: {
        paddingLeft:13, 
        paddingRight:13, 
        backgroundColor:Colors.primary200, 
        borderRadius:15, 
        paddingTop:13, 
        paddingBottom:12
    },
    smallBox: {
        paddingLeft:41, 
        paddingRight:41, 
        borderRadius:15, 
        paddingTop:17, 
        paddingBottom:17,
        width:142, 
        height:94
    },
});