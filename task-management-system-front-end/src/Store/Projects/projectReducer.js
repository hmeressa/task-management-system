import * as projectActionTypes from "./projectActionTypes";

const initialState={
    allProjects:[],
    project:[],
    error:'',
    loading:false
}

export const projectReducer=(state=initialState,actions)=>{
    switch(actions.type){
       case projectActionTypes.PROJECT_DATA_REQUEST:
         return{
            ...state,
            loading:true,
            }
        case projectActionTypes.PROJECT_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                allProjects:actions.payload,
            }
        case projectActionTypes.PROJECT_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                error:actions.payload,
            }
        case projectActionTypes.GET_PROJECT_BY_ID:
            return{
                ...state,
                loading:false,
                project:actions.payload, 
            }
        case projectActionTypes.DELETE_PROJECT_BY_ID_SUCCESS:
             return{
                ...state,
                loading:false,
                allProjects:actions.payload,
             }
        case projectActionTypes.UPDATE_PROJECT_BY_ID_SUCCESS:
                return{
                   ...state,
                   loading:false,
                   allProjects:actions.payload,
                }
        case projectActionTypes.ADD_PROJECT_SUCCESS:
            return{
                ...state,
                loading:false,
                allProjects:actions.payload,
            }
        case projectActionTypes.ADD_TASK_TO_PROJECT:
            return{
                ...state,
                loading:false,
                project:actions.payload,
            }
        case projectActionTypes.DELETE_TASK_ON_PROJECT:
            return{
                ...state,
                loading:false,
                project:actions.payload,
            }
        case projectActionTypes.ASSIGN_TASK_TO_USER:
            return{
                ...state,
                loading:false,
                project:actions.payload,
            }
        default:return state;

    }
}