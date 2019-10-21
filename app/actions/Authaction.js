import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED}   from './types';

import axios from 'axios';

export const LoginUser = ({ username, password}) => {
    return(dispatch) => {

        dispatch({type : LOGIN_ATTEMPT});


        //Call the back-end
      axios.post('https://mean-app-tutorial.herukoapp.com/usrers/auth', { email: username, password})
         .then(resp => console.log(resp) )
         .catch(error => console.log(error));
    };

}