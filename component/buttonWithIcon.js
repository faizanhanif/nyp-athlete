import React, { Component } from 'react';
import styles from './mainStyle';
import {View,Text,Image} from 'react-native';
import { Button } from 'native-base';


export default class ButtonWithIcon extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Button iconLeft style={[styles.ImageButtonDiv, {backgroundColor: this.props.backgroundColor,top:this.props.top }]}>
                    <Image source={this.props.source} style={styles.buttonImage} />
                    <Text style={styles.ButtonText}> {this.props.text}</Text>
                </Button>
            </View>

                 

        );
    }
}