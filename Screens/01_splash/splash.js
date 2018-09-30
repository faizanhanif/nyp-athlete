import React,{Component} from 'react';
import styles from './styles.js';
import {ImageBackground,Image} from 'react-native';

import Logo from '../../component/logo';

export default class Splash extends Component{
    render(){
        return(
            <ImageBackground style={styles.background} source={require('./images/splash1.jpg')}>
            <Logo source={require('./images/logo.png')} height={150} width={200}/>
             
                </ImageBackground>
        );
    }
}