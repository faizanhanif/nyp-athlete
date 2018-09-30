import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    scrollView:{
    flexGrow:1
    },
    KeyboardAvoidingView:{
        flex:1
    },
    background:{
        flex:1,
        height:null,
        width:null
    },
    logo:{
        height:90,width:320,left:20,top:40
    },
    radioButtondiv:{
    backgroundColor:'#d0d0d0',
    opacity:0.7,
    borderRadius:3,
    marginBottom:10,
    
    },
    radioButton:{
        marginTop:400,
        flex:1
    },
    text:{
        color:'#000000',       
        fontSize:16.5,
        left:10,
        fontFamily:'roboto',
        fontWeight:'400'

    },
    buttonDiv:{
        marginTop:80,
        marginLeft:20,
        marginRight:20,
        alignItems:'center',
        justifyContent:'center'
       },
       button:{
        width:320,
        height:50,
        borderRadius:9,
       
        
       },
       buttonTextAlign:{
           left:140,
           fontSize:16,
           fontWeight:'500'
       },

       nativeRadioButtondiv:{
        backgroundColor:'#d0d0d0',
        opacity:0.7,
        borderRadius:3,
        marginBottom:10,
        
        },
        nativeRadioButton:{
            marginTop:400,
            flex:1
        },
        modal3: {
            height: 280,
            width: 300,
            borderRadius:5,
            backgroundColor:'transparent',
        } ,
        crossButton:{
            height:19,
            width:19,
            left:279,
            position:'absolute',
            top:1   
        }
})

export default styles;