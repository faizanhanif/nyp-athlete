import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'

import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import Logo from '../../component/logo';
import TextBox from '../../component/textInput';
import { DrawerNavigator, DrawerItems,DrawerActions } from 'react-navigation'
import Home from './Home';
import Profile from './profile';
import PictureVideo from './pictureVideo';
import ManageSport from './manageSport';
import JoinTeam from './joinTeam';
import AddTeam from './addTeam';
import Setting from './setting';
import LogOut from './logout';

const CustomDrawer = (list) => {

    return (

        <ImageBackground source={require('./images/background1.jpg')} style={{ height: null, width: null, flex: 1 }}>
            <TouchableOpacity  style={{ height: 15, width: 20,top:15, left: 20}} onPress={()=>{console.log(list.navigation.closeDrawer())}}>
                <Image source={require('./images/back-Arrow.png')} style={{ height: 15, width:20}} />
            </TouchableOpacity>
            <View>
                <Image source={require('./images/profilepic.jpg')} style={{ height: 100, width: 100, top: 15, left: 90, borderRadius: 5, borderWidth: 1, borderColor: 'red',marginBottom:20 }} />
            </View>
            <View style={{ height: 50, width: 122, left: 80 }}>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: '500' }}> Komol Kuchvaro </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./images/us.jpg')} style={{ height: 16, width: 22, left: 10 }}></Image>
                                <Text style={{ fontSize: 10, color: 'white', left: 12 }}> UNITED STATES </Text>
                            </View>
                        </View >
           
                        <View style={{ top:-5 }} >
                <DrawerItems  {...list} activeTintColor='#dad8d9' activeBackgroundColor='#bc001b' inactiveTintColor='#dad8d9' inactiveBackgroundColor='transparent' labelStyle={{fontSize:15,left:-15,fontWeight:'400'}} style={{borderWidth:2,borderColor:'white'}}/>
            </View>
        </ImageBackground>


    )
}
const MyApp = DrawerNavigator({
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    'Picture /Video': {
        screen: PictureVideo
    },
    ManageSport: {
        screen: ManageSport
    },
    JoinTeam: {
        screen: JoinTeam
    },
    AddTeam: {
        screen: AddTeam
    },
    Setting: {
        screen: Setting
    },
    LogOut: {
        screen: LogOut
    },

}, {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        contentComponent: CustomDrawer,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'


    })
export default MyApp;

class Newsfeed extends Component {
    constructor(props) {
        super(props)
    }

  

   
         
   closeDrawer=()=>{
    this.props.navigation.closeDrawer();
   }

    render() {
       return (
            <View style={{ flex: 1 / 2 }}>
                <MyApp  />

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
