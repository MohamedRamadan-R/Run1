import React,{Component} from 'react';
import LoginComponent from './LoginForm';






const handlelogin = values=>{this.props.navigation.navigate('Home')};





const  Login = (props) => {
    
        return(
            
        
       
       <LoginComponent handlelogin={handlelogin} ></LoginComponent>
    
       
            
        );
   
    }

    export default Login;