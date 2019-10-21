import React, {Component} from "react";
import {RecyclerListView, LayoutProvider, DataProvider} from "recyclerlistview";
import {View, Dimensions, Text, Image,ImageBackground,TouchableOpacity,StyleSheet} from "react-native";
import CraftsmenData from "./CraftsmenData";
import ViewCard from "./ViewCard";
import DrawerNavigator from "./Drawer";





let {height, width} = Dimensions.get('window');
export default class Home extends Component {
    constructor(args) {
        super(args);
        this.state = {
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2
            }).cloneWithRows(CraftsmenData)
        };
        this._layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider.getDataForIndex(i).type;
        }, (type, dim) => {
            switch (type) {
                case "ITEM":
                    dim.width = width;
                    dim.height = 120;
                    break;
                default:
                    dim.width = width;
                    dim.height = 0;

            }
        });
        this._renderRow = this._renderRow.bind(this);
    }


    _renderRow(type, data) {
        switch (type) {
            case "ITEM":
                return <ViewCard data={data}/>;
            default:
                return null;

        }

    }

    render() {
        return   <View style={styles.container}>
            
                <ImageBackground style={styles.header} source={require('./images/Home-repair.png')} >
                    <View style={styles.header1}>
                    <View style={styles.header2}>
                    <Image source={require('./images/profile.png')}style={styles.Icon2}></Image>   
                        <Image source={require('./images/logo.png')} style={styles.logo}></Image>

                    </View>
                    <View style={styles.header3} >   
                    <Image source={require('./images/pin.png')} style={styles.Icon1}></Image>  
                        <TouchableOpacity style={styles.buttons}>
                  <   Text style={styles.buttontext} >اليوم</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttons}>
                  <   Text style={styles.buttontext} >المهندسين</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttons}>
                  <   Text style={styles.buttontext} >كل الخدمات</Text>
                  </TouchableOpacity></View>
                  
                  </View>

                    
                </ImageBackground>
            
            <RecyclerListView 
            rowRenderer={this._renderRow} 
            dataProvider={this.state.dataProvider}
            layoutProvider={this._layoutProvider}/>
        </View>
    }
}
const   styles = StyleSheet.create( {
    container: {
        flex: 1,

    },
    header:{
        height: 140,
        alignItems:"center",
        flexDirection:"column",
        elevation:4
    },
    header1:{
        backgroundColor: 'black',
        width:'100%',
        height:'100%',
        opacity:0.7,
        flexDirection:'row',
    },
    header3:{
        backgroundColor: 'black',
        height:80,
        opacity:0.8,
        flexDirection:'row',
    },
    buttons:{
        height:30,
        width:80,
        borderRadius:6,
        borderColor:'#ddd',
        backgroundColor:'#FAC858', 
        textAlign:'center',
        marginVertical:10,
        marginHorizontal:5,
        marginTop:95,
    },
    buttontext:{

        color:'white',
        textAlign:"center",
        fontSize:15,
        fontWeight:'bold',
        marginTop:3,
        padding:1
        

    },
    header2:{
        backgroundColor: 'black',
        height:80,
        width:0,
        opacity:1,
        flexDirection:'row',
    },
    headerText:{
        color:'white',
        fontSize:18,
        marginLeft: 16,
        paddingBottom:3
    },
    Icon1:{
       borderRadius:25,
       marginTop:90,
       marginLeft:5,
       marginRight:95,
       height:40,
       width:40

    },
    Icon2:{
        borderRadius:25,
       marginTop:25,
       marginLeft:5,
        height:40,
        width:40
 
     },
    logo:{
       height:90,
       width:90,
       marginBottom:5,
       marginHorizontal:130,
       
    }
})