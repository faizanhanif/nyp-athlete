import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,ImageBackground,ScrollView,KeyboardAvoidingView} from 'react-native'
import Logo from '../../component/logo';
import Danger_button from '../../component/button';


export default class PriceScreen extends Component{
    changepage=()=>{
        this.props.history.push('/NewsFeed');
      }
   
    render(){
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <KeyboardAvoidingView style={{flex:1}} enabled behavior="padding">
                <ImageBackground style={{width:null,height:null,flex:1}} source={require('./images/background.jpg')}>
                <Logo source={require('./images/logo.png')} height={90} width={330} top={40}/>
                <View style={{top:50}} >
                <Text style={{fontSize:20,left:95,color:'white',top:15}}>Boost Your Exposure</Text>
                <Text style={{fontSize:25,left:100,top:40,color:'white'}}>$</Text>
                    <Text style={{fontSize:120,color:'red',left:115,top:-30}}>20</Text>
                    <Text style={{color:'white',fontSize:25,left:245,top:-90}}>/year</Text>
                    <Text style={{color:'white',fontSize:18,left:50,top:-75}}>Longer Video time more Storage</Text>
                    <Text style={{color:'white',fontSize:18,left:80,top:-70,fontWeight:'500'}}>Space Highlighted profile</Text>
                    </View>
                    <Danger_button text="Boost Now" top={10} color="white" backgroundColor="red"/>
                    <View>
                    <Text style={{color:'white',fontSize:16,left:35,top:20}}>Continue to Promote Yourself for free on</Text>
                    <Text style={{color:'white',fontSize:17,left:130,top:25,fontWeight:'500'}}>Not Yet Pro</Text>
                        </View>
                    <Danger_button text="Continue" top={38} color='red' onPress={this.changepage}/>
                </ImageBackground>
                </KeyboardAvoidingView>
              </ScrollView>
        )
    }
}