import React,{Component}from 'react';
import {  ImageBackground,KeyboardAvoidingView, ScrollView} from 'react-native';
import Logo from '../../component/logo';
import TextBox from '../../component/textInput';
import CustomRadioButton from '../../component/01_radioButton';
import DualTextbox from '../../component/dualTextbox';
import Danger_button from '../../component/button';


export default class Register extends Component{

    constructor(props)
    {
        super(props);
        this.state={
          
            pressStatus:false,
            loginButton:false
        };
    }

    changepage=()=>{
        this.props.history.push('/Register1');
         }
       
    
render(){
    return(
    
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView style={{flex:1}} enabled behavior="padding">
                <ImageBackground style={{width:null,height:null,flex:1}} source={require('./images/background.jpg')}>
                <Logo source={require('./images/logo.png')}  height={90} width={320} top={20}/>
                <TextBox placeholder="Name" top={40}/>
            
                <CustomRadioButton maintitle="Gender" option1="Male" option2="Female" top={50} left={30}/>
                <TextBox placeholder="Username" top={40}/>
                <TextBox placeholder="Email" top={45}/>
                <TextBox placeholder="Password" top={50} password={true}/>  
                <TextBox placeholder="Date Of Birth" top={55}/>
                <TextBox placeholder="Location" top={60}/> 
                <DualTextbox title1="Height" title2="Weight" top={65}/>
                <Danger_button text="Next" color="red" top={75} onPress={this.changepage}/>
                 </ImageBackground>
                 </KeyboardAvoidingView>
               </ScrollView>
        
    );
}

}

