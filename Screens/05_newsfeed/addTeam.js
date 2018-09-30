import React,{Component} from 'react';

import {View,StyleSheet,Text,Image} from 'react-native';

export default class AddTeam extends Component{
    static navigationOptions= {
        drawerIcon:(
            <Image source={require('./images/add.png')} style={{width:22,height:22}}/> 
        )
    }
  
    render(){
        return(
     <View style={{flex:1}}>
       <Text> AddTeam</Text>
         </View>
        );
    }
}