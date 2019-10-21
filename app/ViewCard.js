import React, {Component} from "react";
import {Text, View,Image,TouchableOpacity} from "react-native";
import StarRating from "./StarRating";


export default class ViewCard extends Component {
    render() {
        return(
        <View  style={styles.outerContainer}>
            <View style={styles.container}>
          <View style={styles.button}>
              <TouchableOpacity>
                  <Text style={styles.buttontext}>{this.props.data.values.button}</Text>
                  </TouchableOpacity>
                  </View>
                  <View>
                      <Text>محمد عبدالرحيم</Text>
                      <Image source={require('./images/star.png')} style={styles.itemimage}/>
                      <Text style={styles.itemtext2}>كهربائي</Text>
                 <TouchableOpacity>
                  <   Text style={styles.itemtext}>التفاصيل</Text>
                  </TouchableOpacity>
                      
                  </View>
                <Image style={styles.image} source={ this.props.data.values.image }/>
                
            </View>
            <View style={styles.line}></View>
        </View>);
    }
}
const styles = {
    outerContainer:{
        flex:1,
        alignItems:'stretch'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
        alignItems:"center",
        padding:16
    },
    itemtext:{
        textDecorationLine: 'underline',
        color:'#FAC858',
        marginTop:15,
        
    },
    itemtext2:{
        color:'gray',
    },
    itemimage:{
             marginLeft:150,
             marginTop:5
    },
    buttontext: {
        
        color:'black',
        fontSize:16,
        backgroundColor:'orang'
    },
    button:{
        height:30,
        width:70,
        borderRadius:6,
        borderColor:'#ddd',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FAC858',
        marginBottom:60
        
     },
    image: {
        height: 90,
        width: 90,
        borderRadius:6
        
    },
    line: {
        height: 1.5,
        backgroundColor: "black",
        marginLeft:10,
        marginRight:10
    }
}