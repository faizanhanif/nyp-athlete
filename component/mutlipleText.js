import React, { Component } from 'react';
import styles from './mainStyle';
import {View,Text,Image} from 'react-native';


//props text1  text2
export default class Multiple_Text extends Component{
    render(){
        return(

        

<View style={[styles.bottomTextDiv,{flex:1},{top:this.props.top}]}>
<Text style={styles.bottomText}>
   {this.props.text1}  
    </Text>

    <Text style={[styles.bottomText2,{textDecorationLine:this.props.textDecorationLine}]}>
    {this.props.text2}
        </Text>


</View>
);
}
}