
import React from 'react';
import {createStore} from 'redux';
import { statement } from '@babel/template';

const Reducer = (state = [], action) => {
    if( action.type === 'to_array'){
         return action.data.split(' ');
    }
    if(action.type === 'add'){
        let values = state;
        values.push(action.data);
        return values; 
    }
    return state;
};



const store = createStore(Reducer);
console.log(store.getState());

// Action 

const action = {
    type:'to_array',
    data:"Hello World"
}

store.dispatch(action);
console.log(store.getState());

const action2 ={
    type:'add',
    data:'Mohamed'
}

store.dispatch(action2);
console.log(store.getState());

export default Reducer;