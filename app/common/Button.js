import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';


const Button = (props) => {

return(
    <View style={styles.button}>     
     <TouchableOpacity  onPress={props.onPress}>
        <Text style={styles.text}>{ props.children}</Text>
    </TouchableOpacity>
    </View>
);

}

const styles=StyleSheet.create({

    button:{
       height:45,
       borderRadius:6,
       marginHorizontal:25,
       marginVertical:10,
       borderColor:'#ddd',
       justifyContent:'center',
       backgroundColor:'#F6813A',
       flex:1
    },
   text:{

         color:'white',
         textAlign:"center",
         fontSize:20,
         fontWeight:'bold',}
});

export default Button;