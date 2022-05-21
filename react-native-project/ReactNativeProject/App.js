/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
 import 'react-native-gesture-handler';
import React from 'react';
import {
   SafeAreaView,
   StatusBar,
   View
   //useColorScheme,
} from 'react-native';
 
import Main from './components/Main';   

export default function App() {
    return (
        <View  style={{flex:1}}>
            <StatusBar barStyle={'light-content'} />
            <Main />
        </View>
    );
};
 
/* import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen'; */
 
 /* const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 }; */
 
 /* const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   } */;
 
 {/* <ScrollView
     contentInsetAdjustmentBehavior="automatic"
     style={backgroundStyle}>
 </ScrollView> */}
 
 