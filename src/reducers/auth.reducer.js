import { authConstant } from "../actions/constants"

const init = {
    firstName: '',
    lastName:'',
    email:'',
    authentication:false,
    authenticated:false,
    error:null
}

export default (state = init,action)=>{
    switch(action.type){
        case `${authConstant.USER_LOGIN}_REQUEST`:
            state = {
                ...state,authentication:true
            } 
        break;
        case `${authConstant.USER_LOGIN}_SUCCESS`:
            state = {
                ...state,
                ...action.payload.user,
                authenticated:true,
                authentication:false

            }
             break;
        case `${authConstant.USER_LOGIN}_FAILURE`: 
            state = {
                ...state,
                authenticated:false,
                authentication:false,
                error:action.payload.error
            }
            break;

    }
    return state;

}