import React, { Component } from 'react';
import styles from './styles.js';
import { View, ImageBackground, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import {
  AppTour,
  AppTourSequence,
  AppTourView
} from 'react-native-taptargetview'
import Modal from 'react-native-modalbox';
import { Input, Item, Button, Text } from 'native-base';


//Component used
import Logo from '../../component/logo.js';
import CircleButton from '../../component/circleButton';
import TextBox from '../../component/textInput.js';
import Danger_button from '../../component/button.js';
import List from '../../component/list.js';


export default class AddSport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appTourTargets: [],
      add: true,
      back: true,
      sport: '',
      todo: [],
      login:false
    }
  }


  changecolor = () => {
    this.setState({ back: false, add: false })
  }

  componentDidMount() {

    setTimeout(() => {
      let appTourSequence = new AppTourSequence()
      this.state.appTourTargets.forEach(appTourTarget => {
        appTourSequence.add(appTourTarget)
      })
      AppTour.ShowSequence(appTourSequence)
      this.setState({ back: false, add: false })

    }, 1000)

  }
  Onchangehandler = (text) => {
    this.setState({ sport: text });
  }
  submithandler() {

    let _todo = [...this.state.todo];
    _todo.push(this.state.sport);
    this.setState({ todo: _todo });
    this.setState({ sport: '', login: true });

}
changepage=()=>{
  this.props.history.push('/PriceScreen');
}



  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
          <ImageBackground style={styles.background} source={require('./images/background.jpg')} >
            <Logo source={require('./images/logo.png')} height={90} width={320} top={20} />
            <CircleButton {...this.state.back ? { backgroundColor: 'white' } : { backgroundColor: '#c40014' }}
              source={this.state.add ? require('./images/add_red.png') : require('./images/add.png')} imageheight={25} imagewidth={25}
              addAppTourTarget={appTourTarget => {
                this.state.appTourTargets.push(appTourTarget)
              }} onPress={() => this.refs.modal3.open()} />
               
            <View style={{ top:10,flex:4}}>
              {
                this.state.todo.map((val, key) => {
                  return (
                    <List key={key} text={val} source={require('./images/edit.png')} height={20} width={20}  left={267} bottom={5} />
                    
                  )
                })
              }  
               { this.state.login ? 
                            <Danger_button text="Join now"  color="red" width={300} left={120} buttonleft={10} onPress={this.changepage}/>
                               : null   
                   }

            </View>
            
            <Modal style={styles.modal3} position={"center"} ref={"modal3"} animationType={'slide'}  >
            <Image source={require('./images/x.png')} style={styles.crossButton} onpress={() => { this.refs.modal3.close()}} />
              
              
             
              <TextBox placeholder="Years of Experience" top={20} borderWidth={1} borderTopColor={'#c3c3c3'} borderBottomColor='#f1f1f1'
                borderLeftColor='#f1f1f1'
                borderRightColor='#f1f1f1' />
              <TextBox placeholder='Current School (optional)' top={25} borderWidth={1} borderTopColor={'#c3c3c3'} borderBottomColor='#f1f1f1'
                borderLeftColor='#f1f1f1'
                borderRightColor='#f1f1f1' />
              <TextBox placeholder='Sport' top={30} onChangeText={this.Onchangehandler} name='sport' borderWidth={1} borderTopColor={'#c3c3c3'} borderBottomColor='#f1f1f1'
                borderLeftColor='#f1f1f1'
                borderRightColor='#f1f1f1' />
              <Danger_button text="Add Sport" top={35} width={260} left={90} color="red" onPress={() => { this.submithandler(), this.refs.modal3.close() }} />
           
            
            </Modal>
            
          </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}