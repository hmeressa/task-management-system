import * as authActionTypes from "./authActionTypes";

const initialState={
    userData:[],
    permissions:[],
    roleType:'',
    token:'',
    error:'',
    loading:false
}

export const loginReducer=(state=initialState,actions)=>{
    switch(actions.type){
       case authActionTypes.LOGIN_REQUEST:
         return{
            ...state,
            loading:true,
            }
        case authActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                userData:actions.payload,
                permissions: actions.payload?.role?.permission?.map(item=>item.slug),
                roleType:actions.payload?.role?.name,
            }
        case authActionTypes.LOGIN_FAILURE:
            return{
                ...state,
                loading:false,
                error:actions.payload,
            }
        default:return state;

    }
}