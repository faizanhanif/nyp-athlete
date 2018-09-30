import React,{Component} from 'react';

import {View,StyleSheet,Text,Image,Dimensions,PixelRatio,TouchableOpacity,ScrollView} from 'react-native';
import TextBox from '../../component/textInput';
import { Button } from 'native-base';
import Danger_button from '../../component/button';

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

export default class Following extends Component{
    constructor(props){
        super(props)
        this.state={
         button1:false,
         button2:false,
         button3:true,
         button4:false,
         button5:false,
         Even:true,
         value:0,
         following:[
             {name:'Amelia8522',petname:'Ameliaasdsad',image: require("./images/amelia.jpg"),buttonValue:true},
             {name:'Emma2306',petname:'Emma',image: require("./images/amelia.jpg"),buttonValue:true},
             {name:'Olivia14718',petname:'Olivia',image: require("./images/amelia.jpg"),buttonValue:true},
             {name:'Isla134579',petname:'Isla',image: require("./images/amelia.jpg"),buttonValue:true},
             {name:'Sophia12345',petname:'Sophia',image: require("./images/amelia.jpg"),buttonValue:true},
             {name:'Amelia8522',petname:'Ameliaasdsad',image: require("./images/amelia.jpg"),buttonValue:true},
           
         ]
        };
    }

    submithandler=(key)=>{
       console.log("buttonPressed"+key)
       let _following=[...this.state.following];
       if(_following[key].buttonValue==true)
       {
        _following[key].buttonValue=false;
       }
       else{
        _following[key].buttonValue=true;
       }
       
       this.setState({following:_following});
    }
    render(){
        return(
           
            <View style={{flex:1}}>
            <ScrollView contentContainerStyle={{flex:1}}  behaviour = "height" >
            <View style={{height:heightPercentageToDP('90%'),backgroundColor:'white'}}>
            <View style={{width:widthPercentageToDP('100%'),height:heightPercentageToDP('7%'),backgroundColor:'white',borderBottomColor:'grey',
            borderTopColor:'white',
            borderWidth:1}}>
               <Image source={require('./images/searchRed.png')} style={{height:'50%',width:'6%',top:'30%',left:'5%'}}/>
               <TextBox width={widthPercentageToDP('100%')}  height={heightPercentageToDP('6%')}  top={'-50%'}
                   left={'6%'} borderRadius={3} placeholder="Arien Lauder, Ben Gibbard and 1 other" 
                   backgroundColor='white' borderRightColor='transparent'
                   borderTopColor='transparent'/>
               
                </View>
                <View>
                    <Text style={{color:'red',left:'5%',top:'18%',fontSize:16,marginBottom:'5%',backgroundColor:'white'}}>Following</Text>
                    </View>
                    
                        { this.state.following.map((val,key)=>{  
                            return(
                                <View style={{flexDirection:'row',width:widthPercentageToDP('100%'),height:heightPercentageToDP('10%')}}>
                        <View style={{width:widthPercentageToDP('70%'),height:heightPercentageToDP('10%'),left:'2%'}} >
                    <Image source={val.image} style={{width:widthPercentageToDP('13%'),height:heightPercentageToDP('7%'),backgroundColor:'transparent',borderRadius:60,top:'15%',left:'4%'}}/>
                   <Text style={{top:'-55%',left:'28%',fontSize:17,fontWeight:'400',color:'black'}}>{val.name}</Text>
                    <Text style={{top:'-52%',left:'28%',fontSize:13}}>{val.petname}</Text>
                    </View>
                   
                    { val.buttonValue ?
                    <TouchableOpacity style={{height:heightPercentageToDP('4%'),width:widthPercentageToDP('25%'),justifyContent:'center',alignItems:'center',
                    backgroundColor:'#bc001b',top:'5%'}} onPress={()=>{this.submithandler(key)}}>
                          
                         <Text style={{color:'white'}}> Unfollow</Text> 
                        
                         </TouchableOpacity>
                         :
                         <TouchableOpacity style={{height:heightPercentageToDP('4%'),width:widthPercentageToDP('25%'),borderWidth:1,borderBottomColor:'grey',justifyContent:'center',alignItems:'center',
                    backgroundColor:'white',top:'5%'}} onPress={()=>{this.submithandler(key)}}>
                          
                         <Text style={{color:'grey'}}> Follow Me</Text> 
                        
                         </TouchableOpacity>
                            
                         }
                                       
                        

                          </View>  )
                        })}
                       
                    </View>
                     <View style={{width:Dimensions.get('window').width,height:60,flexDirection:'row',backgroundColor:'black'}}>
                
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
                       </ScrollView>
                       </View>
                      

                
        )
    }
}