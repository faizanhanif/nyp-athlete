import React, { Component } from 'react';
import styles from './mainStyle';
import {View,Text,Image} from 'react-native';
import {Button} from 'native-base';
import { AppTourView } from 'react-native-taptargetview'


export default class CircleButton extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <Button style={[styles.roundCircle,{backgroundColor:this.props.backgroundColor}]}
                onPress={this.props.onPress}
                ref={ref => {
                    this.props.addAppTourTarget &&
                      this.props.addAppTourTarget(
                        AppTourView.for(ref, {
                            title: 'Hello!',
                            description: 'You can add sports from here',
                            outerCircleColor: '#c40014',
                            descriptionTextSize: '15',
                            titleTextSize: '40',
                            outerCircleAlpha: '0.55f',
                            dimColor: 'black',
                            targetRadius: '10',
                            
                            
                        })
                      )
                  }}
                  >
                <Image source={this.props.source} style={[styles.roundCircleImage,{height:this.props.imageheight,width:this.props.imagewidth}]}/>
      </Button>
            </View>

                 

        );
    }
}