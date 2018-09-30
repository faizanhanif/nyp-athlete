import React, {Component} from 'react';
import styles from './styles.js';
import {View,ImageBackground,KeyboardAvoidingView,ScrollView} from 'react-native';

//Component used
import Logo from '../../component/logo.js';
import Danger_button from '../../component/button.js';
import NativeRadioButton from '../../component/02_radioButton';




export default class Register1 extends Component{
    constructor(props)
    {
        super(props);
        this.state={
           radio1:false,
           radio2:false,
           radio3:false,
           radio4:false,
           

        };
      }
     changepage=()=>{
       this.props.history.push('/AddSport');
     }
     
    render()
       {
          return(
            <ScrollView contentContainerStyle={styles.scrollView}>
             <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <ImageBackground  style={styles.background} source={require('./images/re3gister.jpg')} >
            <Logo source={require('./images/logo.png')}  height={90} width={320} top={20} />
            <View style={{top:80,marginRight:20}}>
           <NativeRadioButton title="Athlete"
               { ...this.state.radio1 ? {backgroundColor:'#a00211',borderColor:'#a00211'}:{backgroundColor:'#d0d0d0'}} 
               {...this.state.radio1 ? {color:'white'}:{color:'black'}} 
               selected={this.state.radio1}  
               onPress={() => { this.setState({radio1:true,radio2:false,radio3:false,radio4:false}) }}
               />
             <NativeRadioButton title="Coach"
               { ...this.state.radio2 ? {backgroundColor:'#a00211',borderColor:'#a00211'}:{backgroundColor:'#d0d0d0'}} 
               {...this.state.radio2 ? {color:'white'}:{color:'black'}} 
               selected={this.state.radio2}  
               onPress={() => { this.setState({radio1:false,radio2:true,radio3:false,radio4:false}) }}
               />  
         
         <NativeRadioButton title="Fan"
               { ...this.state.radio3 ? {backgroundColor:'#a00211',borderColor:'#a00211'}:{backgroundColor:'#d0d0d0'}} 
               {...this.state.radio3 ? {color:'white'}:{color:'black'}} 
               selected={this.state.radio3}  
               onPress={() => { this.setState({radio1:false,radio2:false,radio3:true,radio4:false}) }}
               />          
           <NativeRadioButton title="Parent"
               { ...this.state.radio4 ? {backgroundColor:'#a00211',borderColor:'#a00211'}:{backgroundColor:'#d0d0d0'}} 
               {...this.state.radio4 ? {color:'white'}:{color:'black'}} 
               selected={this.state.radio4}  
               onPress={() => { this.setState({radio1:false,radio2:false,radio3:false,radio4:true}) }}
               />
            </View>
           
            <Danger_button text="Next" color="red" top={80} onPress={this.changepage}/>



            </ImageBackground>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

