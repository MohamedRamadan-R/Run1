import {LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS} from '../actions/types'


const INITIAL_STATE = {user: null , loading: false , error: ""}
export default  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_ATTEMPT :
            return{...state,loading: true}
        default:
            return state;
    }
}