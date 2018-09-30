import React,{Component}from 'react';

import { ImageBackground, KeyboardAvoidingView, ScrollView} from 'react-native';
import { StatusBar } from 'react-native';
import Logo from '../../component/logo';
import TextBox from '../../component/textInput';
import Text_Component from '../../component/text';
import ButtonWithIcon from '../../component/buttonWithIcon';
import Danger_button from '../../component/button';
import Multiple_Text from '../../component/mutlipleText';

export default class Login extends Component  {
   
   constructor(props)
   {
       super(props);
       this.state={
         
           pressStatus:false,
           loginButton:false
           
       };
   }
  
 changepage=()=>{
  this.props.history.push('/Register');
   }
  
   componentWillMount(){
    StatusBar.setHidden(false);
     }
    
    render(){
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={true}>
            <KeyboardAvoidingView style={{flex:1}} enabled behavior="padding">
                <ImageBackground style={{width:null,height:null,flex:1}} source={require('./images/background.jpg')}>
            
                  <Logo source={require('./images/logo.png')} height={150} width={200} top={40}/>
                  <TextBox top={65} placeholder={"username or Password"}/>
                  <TextBox top={75} placeholder={"Password"} password={true}/>
                  <Text_Component text="Forgot Password ?" top={85} left={20} color="white" textDecorationLine="underline" />
                  <Danger_button text="Login" color="red"  top={95} onPress={this.changepage}/>    
                  <ButtonWithIcon source={require('./images/facebook.png')} text=" LOGIN WITH FACEBOOK" backgroundColor='#455a93' top={103}/>
                  <ButtonWithIcon source={require('./images/linkedin.png')} text=" LOGIN WITH LINKEDIN" backgroundColor='#0177b5' top={50}/>
                  <Multiple_Text text1="Already have an account?" text2="Signup" top={-30} textDecorationLine="underline"/>
                               
                                       
          
                </ImageBackground>
                </KeyboardAvoidingView>
              </ScrollView>
        );
    }
}

