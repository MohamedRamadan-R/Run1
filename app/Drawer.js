import React,{Component} from 'react';
import {Platform,Dimensions} from 'react-native';
import{createDrawerNavigator,createAppContainer} from 'react-navigation'


import  Home from "./Home";


const WIDTH = Dimensions.get('window').width;

const Drawerconfig ={ drawerwidth : WIDTH*0.83,
} 

const Drawer = createDrawerNavigator({ 

Home:{

    screen:Home
},

},
Drawerconfig

);


export default createAppContainer(Drawer);