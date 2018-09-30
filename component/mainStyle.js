import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    background:{
        flex:1,
        height:null,
        width:null
    },

    logoDiv:{
    alignItems:'center',
    
    
        
    },
  
    textboxDiv:{
        
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white',
        height:50,
        alignItems:'center',
        borderRadius:3 ,
        opacity:0.7 
    
    },
    textbox:{
      fontSize:14,
      left:10,
      fontFamily:'roboto'
      
    },
   
    
   
    buttonDiv:{
     marginLeft:20,
     marginRight:20,
     
     
     
    },
    button:{
     width:320,
     height:50,
     borderRadius:7,
     alignItems:'center',
     justifyContent:'center',
    
     
    },
    buttonTextAlign:{
        
        fontSize:16,
        fontWeight:'500'
    },


    ImageButtonDiv:{
            
            marginLeft:20,
            marginRight:20,
            width:320,
            height:50,
            borderRadius:3,
            alignItems:'center',
            justifyContent:'center',
    },
    ButtonText:{
            fontSize:15,
            color:'white',
            fontWeight:'500',
            
        
    },
    buttonImage:{
        height:20,
        width:20
    },
   
    bottomTextDiv:{
         alignItems:'center',
         position:'relative',
         left:80,    
         flexDirection:'row'
       
    },
    bottomText:{
    color:'white',
    marginRight:5   
    },
    bottomText2:{
        color:'white',
        fontWeight:'bold'
    },
    radioboxDiv:{
          flexDirection:'row'
    
        },
    
        radioText:{
            color:'white',       
            fontSize:15
        
        },
        radioboxDiv1:{
            left:20,
            flexDirection:'row',
            bottom:8,
        
            },
            dualTextbox:{
                flexDirection:'row',
                marginLeft:20,
                marginRight:20,
                opacity:0.7
                
                
            },
            textbox1:{
                backgroundColor:'white',
                height:50,
                borderRadius:3,
               flex:1,
               marginRight:5
            
            },
            textbox2:{
                backgroundColor:'white',
                height:50,
                borderRadius:3,
               flex:1
            
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
                roundCircle: {
                    left: 270,
                    top: 425,
                    bottom: 10,
                    height: 60,
                    width: 60,
                    borderRadius : 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                
                  },
                  roundCircleImage:{
                  right:0,
                  top:0
                  },
                  text1:{
                    top:14,
                    color:'white',       
                    fontSize:16,
                    left:10,
                    fontFamily:'roboto',
                    fontWeight:'400',
                    
                },
                div1:{
                    height:50,
                    width:300,
                    marginLeft:30,
                    marginRight:30,
                    marginBottom:8,
                    backgroundColor:'#c21f24',
                    opacity:0.85,
                    borderRadius:3
                },
            
        

})

export default styles;