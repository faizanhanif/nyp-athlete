import React,{Component}from 'react';
import styles from  './mainStyle';
import {
    View,
    TouchableOpacity,
    Text
    
} from 'react-native';


export default class Text_Component extends Component{
    
    render(){
        return(
            <View >
            <TouchableOpacity style={{top:this.props.top,left:this.props.left}} >
            
            <Text style={{color:this.props.color,textDecorationLine:this.props.textDecorationLine}} >
                {this.props.text}
                </Text>
                </TouchableOpacity>
                </View>
        );
    }
}