import React, { Component } from 'react';
import styles from './mainStyle';
import {View,Text} from 'react-native';
import {ListItem,Left,Right,Radio} from 'native-base';

//backgroundcolor,color,title,radio1
export default class NativeRadioButton extends Component{
    constructor(props){
        super(props)

        this.state={
             selectedColor:'white',
             color:'#a00211'
        }
    }

    render(){
        return(
            <ListItem style={[styles.nativeRadioButtondiv,{backgroundColor:this.props.backgroundColor,borderColor:this.props.borderColor}]}
            onPress={this.props.onPress}>
           <Left>
             <Text style={[styles.textbox,{color:this.props.color}]}>{this.props.title}</Text>
           </Left>
           <Right >
             <Radio selected={this.props.selected}  selectedColor={this.state.selectedColor} color={this.state.color}
             onPress={this.props.onPress} />
           </Right>
         </ListItem>
        )
    }
} 