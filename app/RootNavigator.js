import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component} from 'react';
import {Provider} from 'react-redux';
import Drawer from './Drawer';
import Home from './Home';
import LoginComponent from './LoginForm';
import store from './store';







const RootNavigator = createStackNavigator({


    Login:{screen:LoginComponent},
    Home: {screen: Home}
        
    });
 
const Navigation =createAppContainer(RootNavigator);
const handlelogin = values =>{};
export default class App extends Component {
render(){
    return(
        
     <Provider store={store}>
   
    <Navigation ></Navigation>

    </Provider>
        
    );
}
}

