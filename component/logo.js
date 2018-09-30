import React,{Component}from 'react';
import styles from  './mainStyle';
import {View,Image} from 'react-native';

export default class Circle extends Component{
    render(){
        return(
     <View style={[styles.logoDiv,{top:this.props.top}]}>
     <Image source={this.props.source} style={{height:this.props.height,width:this.props.width,left:this.props.left}} >
    </Image>
    </View>
        );
    }
}