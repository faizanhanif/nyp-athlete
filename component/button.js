import React, { Component } from 'react';
import styles from './mainStyle';
import {View,Text} from 'react-native';
import { Button } from 'native-base';

// (props) backroundColor,onPress,color,text,top

export default class Danger_button extends Component {
    render() {
        return (
        
            <View style={[styles.buttonDiv,{backgroundColor:this.props.backgroundColor,top:this.props.top}]}>
                             
            <Button bordered danger style={[styles.button,{width:this.props.width,left:this.props.buttonleft,heigth:this.props.height}]}  onPress={this.props.onPress} bo >
             <Text style={[styles.buttonTextAlign,{color:this.props.color}]} >{this.props.text}</Text>
              </Button>
              
             
                 </View>
                 
                 
        );
    }
}