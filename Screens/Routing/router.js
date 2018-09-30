import React ,{Component} from 'react'
import {View} from 'react-native'
import { NativeRouter,Route } from 'react-router-native';
import Login from '../02_login/login';
import Register from '../03_register/register';
import Register1 from '../03a_register/register1';
//import Splash from './Screens/01_splash/splash' ;
import AddSport from '../04_addSport/addSport';
import App from '../../App';
import Newsfeed from '../05_newsfeed/newsfeed';
import PriceScreen from '../06_priceScreen/priceScreen';
import Home from '../05_newsfeed/Home';
import Following from '../05_newsfeed/following';


export default class Router extends Component{
    render(){
        return(
            <NativeRouter>
            <View style={{flex:1}}>
            <Route exact path="/" component={Following}/>
            <Route  path="/Login" component={Login}/>
            <Route  path="/Register" component={Register}/>
            <Route  path="/Register1" component={Register1}/>
            <Route  path="/AddSport" component={AddSport}/>
            <Route  path="/PriceScreen" component={PriceScreen}/>
            <Route  path="/NewsFeed" component={Newsfeed}/>
            <Route  path="/following" component={Following}/>
        
                </View>
                </NativeRouter>
        )
    }
}