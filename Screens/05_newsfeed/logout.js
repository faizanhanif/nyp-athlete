import React,{Component} from 'react';

import {View,StyleSheet,Text,Image} from 'react-native';

export default class LogOut extends Component{
    static navigationOptions= {
        drawerIcon:(
            <Image source={require('./images/logout.png')} style={{width:22,height:22}}/> 
        )
    }
  
    render(){
        return(
     <View style={{flex:1}}>
       <Text> LogOut Screen</Text>
         </View>
        );
    }
}