import React, { Component } from 'react';
import styles from './mainStyle';
import { View ,Text,Image} from 'react-native';



export default class List extends Component {
    render() {
        return (

            <View style={styles.div1}  >
                <Text style={styles.text1}> {this.props.text}</Text>
                <Image source={this.props.source} style={{ height:this.props.height,width:this.props.width,left:this.props.left,bottom:this.props.bottom}} />
            </View>
        );
    }
}