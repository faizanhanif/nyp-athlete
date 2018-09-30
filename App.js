/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Splash from './Screens/01_splash/splash';
import { StatusBar } from 'react-native';





type Props = {};
export default class App extends Component<Props> {
constructor(props){
  super(props);

}


componentWillMount(){
  StatusBar.setHidden(true);
  setTimeout( () => {
    this.props.history.push("/Login")
  
},3000);
 
}

  render() {
    return (
     

      <View style={{flex:1}} >
       
        <Splash/>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
