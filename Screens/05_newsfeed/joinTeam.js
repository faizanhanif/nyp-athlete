import React,{Component} from 'react';

import {View,StyleSheet,Text,Image} from 'react-native';

export default class JoinTeam extends Component{
    static navigationOptions= {
        drawerIcon:(
            <Image source={require('./images/group.png')} style={{width:22,height:22}}/> 
        )
    }
  
    render(){
        return(
     <View style={{flex:1}}>
       <Text>JoinTeam</Text>
         </View>
        );
    }
}