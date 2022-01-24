/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   TextInput,
   Alert,
   TouchableOpacity,
   DeviceEventEmitter,
   AppRegistry
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 class CardComponent extends Component {
   constructor(props) {
     super(props);
 
     this.state={
         
     };
   }
 
   componentDidMount(){
 
     // console.log( this );
 
 
     // 到个人中心
     DeviceEventEmitter.addListener('GReferrerBroadcastReceiver',function(){
 
         Alert.alert(
           "Alert Title",
           "My Alert Msg",
           [
             {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),   
               style: "cancel"
             },
             { text: "OK", onPress: () => console.log("OK Pressed") }
           ]
         ); 
     });
 
   }
 
 
 
   onPress=()=>{
     Alert.alert(
       "Alert Title111",
       "My Alert Msg",
       [
         {
           text: "Cancel",
           onPress: () => console.log("Cancel Pressed"),   
           style: "cancel"
         },
         { text: "OK", onPress: () => console.log("OK Pressed") }
       ]
     );  
   }
 
   render() {
       let that=this;
 
       return (
         <TouchableOpacity
           onPress={()=>{ this.onPress() }}
         >
 
 
         <View
           // onStartShouldSetResponderCapture={()=>{ this.onPress() }} 
         >
           <Text>哇哇哇哇mmm898</Text>
           <Text>bbb222</Text>    
 
  
 
           <TextInput
             ref={(input) => {this.textInput = input;}}
             style={{borderWidth:1}}
           />
 
           <Text>ccc</Text>
           <Text>ddd</Text>
           <Text>fff</Text>
           <Text>bbb222</Text>    
           <Text>bbb222</Text>    
           <Text>bbb222</Text>    
           <Text>bbb222</Text>   
           <Button
             title="Learn More"
             color="#841584"
             accessibilityLabel="Learn more about this purple button"
           />
           <Text>fff</Text>
           <Text>bbb222</Text>    
           <Text>bbb222</Text>    
           <Text>bbb222</Text>    
           <Text>bbb222</Text> 
         </View>
         </TouchableOpacity>
       );
   }
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default CardComponent;
 