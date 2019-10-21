import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        ImageBackground,
        Image,
        KeyboardAvoidingView} from 'react-native';
import Button from './common/Button'
import CardItems from './common/CardItems';
import { State, TextInput } from 'react-native-gesture-handler';
import AuthReducer from './reducers/AuthReducer';
import {Field,reduxForm} from 'redux-form';
import { Spinner } from './common/Spinner';


const required = value => value ? undefined :'Required';
const maxlength = value => value && value.length > 15 ? 'must be 10 characters':undefined;
const minValue = min => value => value && value < min ? `must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const isValidEmail = value => value && !/^[A-Z0-9.-]/i.test (value) ? 'Invalid email address': undefined;
const renderField =({placeholder,name,keyboardType,secureTextEntry,placeholderTextColor}) =>{
  
       return( <TextInput style={styles.textinput}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        name={name}
                        secureTextEntry={secureTextEntry}
                        placeholderTextColor={placeholderTextColor}

                        
                        > 
                        </TextInput>
                                    );
        
};
class LoginForm extends Component{


    constructor(){
        super();
        this.state={
            username:"",
            password:''
        };
    }

   static navigationOptions={
       title:'Login Form'
   };

  onHomePressed() {
          
          const handlelogin = this.props;
          this.props.navigation.navigate('Home');
     }

     renderButton() {
         if (this.props.loading){

            return <Spinner/>;
         }
         return(<Button onPress={this.onHomePressed.bind(this)}>تسجيل الدخول</Button>);
     }

  render() {

return(            
        <ImageBackground style={styles.imageBackground} source= {require('./images/Home-repair.png')}>
                   <KeyboardAvoidingView>
                       <View style={styles.container}>
                       
                <Image style={styles.logo} source={require('./images/logo.png')} />
                   <View style={styles.child}> 
                     <CardItems>
                         
                     <Field keyboardType='default' 
                           component={renderField} 
                           name="Email" 
                           placeholder="البريد الالكتروني" 
                           secureTextEntry={false}
                           placeholderTextColor="white"
                           validate={required,isValidEmail}
                             />
                           
                         </CardItems>
                    <CardItems>
                       
                        <Field keyboardType='default' 
                           component={renderField} 
                           name="Email" 
                           placeholder=" كلمة المرور" 
                           secureTextEntry={false}
                           placeholderTextColor="white"
                           validate={[required,minValue18]}
                         />
                         </CardItems>      
                           </View>
             
                        <View style={styles.button}><CardItems >{this.renderButton()}</CardItems></View> 
                <Text style={styles.text}>لديك حساب-تسجيل الدخول</Text>
                </View>
                </KeyboardAvoidingView>
                </ImageBackground>
);
        
    }
}
const styles=StyleSheet.create({
 
text:{
    marginTop: 5,
    marginBottom:5,
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily:'italic',
    backfaceVisibility:'hidden'
},
container:{
    backgroundColor: 'black',
    width:'100%',
    height:'100%',
    opacity:0.8
},
imageBackground:{
    width:'100%',
    height:'100%',
},
logo:{
    marginTop: 10,
    alignSelf: 'center',
},
child:{
    marginTop:100,
    marginRight:30,
    marginLeft:30,
    justifyContent:"center",
    alignItems:"center",  
},
button:{
        marginTop:120,
        padding:5,
        justifyContent:"center",
        alignItems:"center",
          
},
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

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user
    }
}
 const LoginComponent = reduxForm({
     form:"login",
 })(LoginForm);

 export default LoginComponent;
