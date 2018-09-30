import React,{Component} from 'react';

import {View,StyleSheet,Text,Image} from 'react-native';
import Video from 'react-native-video'
import Video1 from './video1.mp4'

export default class Setting extends Component{

    constructor(props){
        super(props)
        this.state={
            paused:false,
        }
    }
    static navigationOptions= {
        drawerIcon:(
            <Image source={require('./images/setting.png')} style={{width:22,height:22}}/> 
        )
    }
  
    render(){
        return(
            <View style={{ flex: 1 }} onpress={()=>this.setState({paused:true})}>
                <Video
                    paused={this.state.paused}
                    source={require('./video1.mp4')}
                    resizeMode="cover"
                    style={StyleSheet.absoluteFill}
                    onEnd={() => { }}
                    controls={true}
                />
            </View>
        );
    }
}