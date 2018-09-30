import React,{Component} from 'react';

import {View,StyleSheet,Text,Image,ImageBackground,TouchableOpacity,Dimensions} from 'react-native';
import { Button } from 'native-base';

export default class Profile extends Component{
    static navigationOptions= {
        drawerIcon:(
            <Image source={require('./images/user.png')} style={{width:19,height:22}}/> 
        )
    }
  
    constructor(props){
        super(props);
        this.state={
            button1:false,
            button2:false,
            button3:true,
            button4:false,
            button5:false
        };
    }
    changepage=()=>{
        this.props.history.push('/following');
      }

    render(){
        return(
     <View style={{flex:1}}>
       <View style={styles.topDiv}>
                    <ImageBackground style={styles.background} source={require('./images/dp.jpg')}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer() ,console.log(this.props)}} style={{  left: 20,top:20 }}>
                            <Image source={require('./images/menu1.png')} style={{ height: 25, width: 32}} />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#bc001b', height: 40, width: 70, top: 50, borderRadius: 20, left: -20, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./images/bell.png')} style={{ height: 20, width: 24, left: 10 }} />
                        </View>
                        <View>
                            <Image source={require('./images/profilepic.jpg')} style={{ height: 120, width: 120, top: -40, left: 125, borderRadius: 5, borderWidth: 1, borderColor: 'red' }} />
                        </View>
                        <View style={{ backgroundColor: '#bc001b', height: 35, width: 35, top: -170, left: 325 }}>
                            <Image source={require('./images/icon2.png')} style={{ height: 20, width: 17, left: 6, top: 10 }} />
                        </View>
                        <View style={{ backgroundColor: '#bc001b', height: 35, width: 35, top: -165, left: 325 }}>
                            <Image source={require('./images/icon3.png')} style={{ height: 20, width: 20, left: 8, top: 8 }} />
                        </View>
                        <View style={{ backgroundColor: '#bc001b', height: 35, width: 35, top: -160, left: 325 }}>
                            <Image source={require('./images/icon4.png')} style={{ height: 17, width: 20, left: 6, top: 10 }} />
                        </View >
                        <View style={{ backgroundColor: '#bc001b', height: 35, width: 35, top: -155, left: 325 }}>
                            <Image source={require('./images/icon4.png')} style={{ height: 17, width: 20, left: 6, top: 10 }} />
                        </View >
                        <View style={{ height: 50, width: 122, top: -175, left: 122 }}>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: '500' }}> Komol Kuchvaro </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./images/us.jpg')} style={{ height: 12, width: 20, left: 10 }}></Image>
                                <Text style={{ fontSize: 10, color: 'white', left: 12 }}> UNITED STATES </Text>
                            </View>
                        </View >
                    </ImageBackground>
                </View>
                <View style={{ backgroundColor: 'black', flex: 0.5 /5 }} >
                    <Text style={{ color: 'white', left: 25, fontSize: 16, top: 10, fontWeight: '500' }}> 69K</Text>
                    <Text style={{ color: 'white', left: 19, fontSize: 10, top: 10 }}> followers</Text>
                    <Text style={{ color: 'grey', left: 65, fontSize: 30, top: -30, height: 100 }}> |</Text>
                    <Text style={{ color: 'white', left: 90, fontSize: 16, top: -125, fontWeight: '500' }}> 960</Text>
                    <Text style={{ color: 'white', left: 85, fontSize: 10, top: -125 }} onPress={this.changepage}> following</Text>
                    <View style={{ height: 30, width: 140, top: -155, left: 150, borderWidth: 1, borderColor: 'grey', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/messageicon.png')} style={{ height: 16, width: 16, left: -40, top: 10 }} />
                        <Text style={{ color: 'white', top: -9 }}>Message</Text>
                    </View>
                    <View style={{ height: 30, width: 40, top: -185, left: 300, borderWidth: 1, borderColor: 'grey', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/profileicon.png')} style={{ height: 15, width: 21 }} />
                    </View>

                </View>
                <View style={{width:Dimensions.get('window').width,backgroundColor:'black',height:60,top:330,flexDirection:'row'}}>
                
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

const styles = StyleSheet.create({
    topDiv: {
        flex: 1 / 3,
        backgroundColor: 'white'
    },
    background: {
        flex: 1,
        height: null,
        width: null
    },

})
