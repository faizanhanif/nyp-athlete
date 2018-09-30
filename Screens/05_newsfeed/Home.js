import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, Dimensions ,TextInput,TouchableOpacity,PixelRatio} from 'react-native';


import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import Logo from '../../component/logo';
import TextBox from '../../component/textInput';
import { Button } from 'native-base';
import Video from 'react-native-video'

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
  
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
  };
  
  const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
  
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
  };

export default class Home extends Component{
   constructor(props){
       super(props)
       this.state={
        button1:false,
        button2:false,
        button3:true,
        button4:false,
        button5:false
       };
   }


  static navigationOptions= {
      drawerIcon:(
          <Image source={require('./images/home3.png')} style={{width:20,height:17}}/> 
      )
  }
   
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:'black'}}>
            <View style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('8%'),backgroundColor:'#bc001b',flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer() }} style={{  left:'25%',top:'5%' }}>
                            <Image source={require('./images/menu1.png')} style={{ height: '40%', width:32,top:'-4%'}} />
                        </TouchableOpacity>
                        <Text style={{color:'white',top:'4%',left:'200%',fontSize:17,fontWeight:'800'}}>NOT YET PRO </Text>
                </View>
                <View style={{width:widthPercentageToDP('100 %'),height:heightPercentageToDP('8%'),backgroundColor:'black',flexDirection:'row',marginBottom:10}}>
                <Image source={require('./images/icon5.png')} style={{ height: '30%', width:20,top:'5%',left:'30%'}} />
                <View style={{width:widthPercentageToDP('85%'),height:heightPercentageToDP('6%'),backgroundColor:'white',left:'50%',top:'2%',borderRadius:2}}>
                  <TextBox width={widthPercentageToDP('60%')}  height={heightPercentageToDP('6%')}  top={'-15%'}
                   left={'-8%'} borderRadius={3} placeholder="Whats on your mind" backgroundColor='white' borderRightColor='transparent'
                   borderTopColor='transparent'/> 
                   <View>
                    <Image source={require('./images/icon6.png')} style={{ height:'38%', width:25,top:'-140%',left:'85  %'}}/></View>
                   </View>
                       </View>
                       <View style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('25%'),backgroundColor:'black'}}>
                       <Text style={{color:'white',left:'7%',top:'3%'}}>Photos</Text>
                      
                       <Image source={require('./images/coach1.jpg')} style={{ height: '80%', width:'60%',top:'5%',left:'7%'}} />
                       <Text style={{color:'white',left:'8%',top:'-25%',fontSize:17,opacity:0.5}}>Breed</Text>
                       <Text style={{color:'white',left:'8%',top:'-25%',fontSize:19}}>Bichon Fries</Text>
                       <Image source={require('./images/coach2.jpg')} style={{ height: '37%',top:'17%', width:'27%',left:'69%',position:'absolute'}} />
                       <Text style={{color:'white',left:'70%',top:'-80%',fontSize:10}}>Bichon Fries</Text>
                       <Image source={require('./images/coach3.jpg')} style={{ height: '39%',top:'57%', width:'27   %',left:'69%',position:'absolute'}} />
                       <Text style={{color:'white',left:'70%',top:'-45%',fontSize:10}}>Bichon Fries</Text>
                           </View>
                           <Text style={{color:'red',left:30,fontSize:10,marginBottom:5}}>View all</Text>
                           <View style={{width:widthPercentageToDP('90%'),height:heightPercentageToDP('38%'),backgroundColor:'white',left:'6%',marginRight:'10%'}}>
                           <Text style={{color:'white',left:'7%',top:'3%'}}>Videos</Text>
                           <Video
                        paused={this.state.paused}
                        source={require('./video1.mp4')}
                        resizeMode="cover"
                        style={StyleSheet.absoluteFill}
                        onEnd={() => { }}
                        controls={true}
                    />
                               </View>

                                <View style={{width:Dimensions.get('window').width,top:40,height:60,flexDirection:'row'}}>
                
                <Button style={{width:'20%',height:60,alignItems:'center',justifyContent:'center',...this.state.button1 ? {backgroundColor:'red'}:{backgroundColor:'black'}}}
                 onPress={()=>this.setState({button1:true,button2:false,button3:false,button4:false,button5:false})}>
                <Image source={require('./images/crown.png')} style={{height:17,width:20,top:-5}}></Image>
                </Button>
                <Button style={{width:'20%',height:60,alignItems:'center',justifyContent:'center',...this.state.button2 ? {backgroundColor:'red'}:{backgroundColor:'black'}}}
                 onPress={()=>this.setState({button1:false,button2:true,button3:false,button4:false,button5:false})}>
                <Image source={require('./images/search.png')} style={{height:19,width:20,top:-5}}></Image>
                </Button>                     
                <Button style={{width:'20%',height:60,alignItems:'center',justifyContent:'center',...this.state.button3 ? {backgroundColor:'red'}:{backgroundColor:'black'}}}
                 onPress={()=>this.setState({button1:false,button2:false,button3:true,button4:false,button5:false})}>
                <Image source={require('./images/camera.png')} style={{height:17,width:20,top:-5}}></Image>
                </Button>                     
                <Button style={{width:'20%',height:60,alignItems:'center',justifyContent:'center', ...this.state.button4 ? {backgroundColor:'red'}:{backgroundColor:'black'}}}
                 onPress={()=>this.setState({button1:false,button2:false,button3:false,button4:true,button5:false})}>
                <Image source={require('./images/notification.png')} style={{height:19,width:20,top:-5}}></Image>
                <Text style={{width:10,height:10,borderRadius:50,top:-15,backgroundColor:'red',color:'white',fontSize:8}}> 7</Text>
                
                </Button>                     
                <Button style={{width:'20%',height:60,alignItems:'center',justifyContent:'center',...this.state.button5 ? {backgroundColor:'red'}:{backgroundColor:'black'}}}
                 onPress={()=>this.setState({button1:false,button2:false,button3:false,button4:false,button5:true})}>
                <Image source={require('./images/profile.png')} style={{height:19,width:20,top:-5}}></Image>
                </Button>                     
                                     
                  </View>
               
            </View>
        );
    }
}
