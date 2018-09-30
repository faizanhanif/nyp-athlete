import React,{Component}from 'react';
import styles from  './mainStyle';
import {
 
    View
        
} from 'react-native';
import {Input,Item} from 'native-base';

export default class TextBox extends Component{
 render(){
     return(
        <View style={[styles.textboxDiv,{top:this.props.top,
            borderWidth:this.props.borderWidth,
            borderTopColor:this.props.borderTopColor,
            borderBottomColor:this.props.borderBottomColor,
            borderLeftColor:this.props.borderLeftColor,
            borderRightColor:this.props.borderRightColor,
            height:this.props.height,
            borderRadius:this.props.borderRadius,
            left:this.props.left,
            width:this.props.width}]}>
        <Item>
            <Input placeholder={this.props.placeholder} style={[styles.textbox,{textTop:this.props.textTop}]} 
            secureTextEntry={this.props.password} 
            onChangeText={this.props.onChangeText}
             name={this.props.name}/>
            </Item>
        </View>
     )
 }
}