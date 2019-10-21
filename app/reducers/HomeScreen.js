import React, {Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native';
import faker from'faker';
import {Craftsmeninfo} from './Craftsmeninfo'
import {DataProvider,LayoutProvider, RecyclerListView} from 'recyclerlistview';




const SCREEN_WIDTH = Dimensions.get('window').width;

class HomeScreen extends Component {

  constructor(props){
      super(props)
  

    const Data =[];
    for( i=0; i<100;i+=1){
        Data.push({
            type:'NORMAL',
            item:{
            id:i,
            image:Craftsmeninfo.image,
            name:Craftsmeninfo.name,
            description:Craftsmeninfo.description, 
                 },
             });
          }
        this.state={
            list: new DataProvider ((r1, r2) => r1 !== r2).cloneWithRows(Data),
        };
this.LayoutProvider = new LayoutProvider ((i) => {

    return this.state.list.getDataForIndex(i).type;
}, (type,dim) =>{
    switch(type){
        case'NORMAL':
            dim.width = SCREEN_WIDTH;
            dim.height=100;
            break;
        default:
            dim.width=0;
            dim.height=0;
            break;
             };
          })
       
        }
    rowRenderer = (type,data) => {
        const {image,name,description} = data.item;
        return(
        

          <View>
              <Image source={{uri : image}} ></Image>
            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
                </View>
            </View>    
        )

    }
    render(){
        return(
            <View style={styles.container}>
             <RecyclerListView
              style={{flex:1}}
              rowRenderer={this.rowRenderer}
              dataProvider={this.state.list}
              layoutProvider={this.layoutProvider}
             />
             
              </View>
                
        );
    }
}

const styles=StyleSheet.create({

container:{

     flex:1,
     backgroundColor:'#FFF',
     maxHeight:1,
     maxWidth:1


},

text:{
    fontSize: 30,
    fontWeight: "300",

  
}


})
export default HomeScreen;