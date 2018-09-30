import React, { Component } from 'react';
import styles from './mainStyle';
import {View,Text} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

//props  top ,left ,maintitle, option1, option2
export default class CustomRadioButton extends Component{
    render(){
        return(
            <View style={[styles.radioboxDiv,{top:this.props.top,left:this.props.left}]} >
            <Text style={styles.radioText}>
                    {this.props.maintitle}
                    </Text>
        
                <RadioGroup style={styles.radioboxDiv1} activeColor='red' color='white'>
                      <RadioButton value={'item1'}  >
                       <Text style={styles.radioText}>{this.props.option1}</Text>
                          </RadioButton>

                      <RadioButton value={'item1'}>
                     <Text style={styles.radioText}>{this.props.option2}</Text>
                     </RadioButton>
                 </RadioGroup>
             </View>
        );
    }
}