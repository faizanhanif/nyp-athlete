import React,{Component} from 'react';

import {View,StyleSheet,Text,Image} from 'react-native';

export default class PictureVideo extends Component{
    static navigationOptions= {
        drawerIcon:(
            <Image source={require('./images/picture.png')} style={{width:22,height:19}}/> 
        )
    }
  
    render(){
        return(
     <View style={{flex:1}}>
       <Text> PictureVideo</Text>
         </View>
        );
    }
}