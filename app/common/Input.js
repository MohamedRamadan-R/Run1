import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';


const Input = (props) =>{
return(
    
        <TextInput style={styles.textinput}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        autoCorrect={false}
        autoCapitalize='none'/>
   
);
}

const styles=StyleSheet.create({

    textinput:{
        flex:1,
        fontSize:20,
        fontFamily:'Taho',
        color:'white',
        borderBottomColor:"white",
        borderBottomWidth:.5,
        height:50

    },
   

});


export default Input;