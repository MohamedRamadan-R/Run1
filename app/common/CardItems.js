import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardItems = (props) => {

return(

    <View style={styles.cardItemsstyle}>
        {props.children}
    </View>
);
}

const styles=StyleSheet.create({
 
    cardItemsstyle: {
    padding:5,
    borderColor: '#ddd',
    borderBottomWidth:0,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'row',
    
    }
});

export default CardItems;