import React,{Component}from 'react';
import styles from './mainStyle';
import { View} from 'react-native';
import {Input,Item} from 'native-base';
//props title1, title2 ,top
export default class DualTextbox extends Component{
    render(){
        return(
            <View style={[styles.dualTextbox,{top:this.props.top}]}>
            <View style={styles.textbox1} >
            <Item>
                <Input placeholder={this.props.title1} style={styles.textbox}  />
                </Item>
               
            </View>
            <View style={styles.textbox2} >
            <Item>
                <Input placeholder={this.props.title2} style={styles.textbox}  />
                </Item>
               
            </View>

            
            </View>
        );
    }
}