import React from 'react';
import {View, StyleSheet, Image} from 'react-native';


const Card = (props) => {
return(
<View style={styles.styleCard}>
            { props.children }
            
            </View>
);
};

const styles=StyleSheet.create({

styleCard:{
    marginLeft:5,
    marginRight:5,
    marginTop:0,
    borderWidth:1,
    borderRadius:6,
    borderColor:'gray',
    borderBottomWidth:0,
    shadowColor:'#000',
    shadowOpacity: 0.1,
    height:550

}


});
export default Card;