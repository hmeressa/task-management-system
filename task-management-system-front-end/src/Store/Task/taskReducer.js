import * as taskActionTypes from "./taskActionTypes";

const initalState={
       taskList:[],
       task:[],
       error:'',
       loading:false,
}

export const taskReducer=(state=initalState,actions)=>{
        switch(actions.type){
            case taskActionTypes.TASK_DATA_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
            case taskActionTypes.GET_ALL_TASK_DATA:
                return{
                    ...state,
                    loading:false,
                    taskList:actions.payload,
                }
            case taskActionTypes.TASK_DATA_FAILURE:
                return{
                    ...state,
                    loading:false,
                    error:actions.payload,
                }
            case taskActionTypes.TASK_BY_ID_SUCCESS:
               return{
                    ...state,
                    loading:false,
                    task:actions.payload,
                }
            case taskActionTypes.TASK_TRANSFER_TO_DONE:
                return{
                    ...state,
                    loading:false,
                    taskList:actions.payload,
                }
           case taskActionTypes.TASK_TRANSFER_TO_IN_PROGRESS:
                    return{
                        ...state,
                        loading:false,
                        taskList:actions.payload,
                   }
            default: return state;
        }
}