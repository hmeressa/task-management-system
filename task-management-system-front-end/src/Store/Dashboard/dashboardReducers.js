import * as allDashboardActionTypes from "./dashboardActionTypes";

const initialState={
     users:[],
     projects:[],
     tasks:[],
     error:'',
     loading:false
}
export const dashboardReducer=(state=initialState,actions)=>{
    
    switch(actions.type){

        case allDashboardActionTypes.DASHBOARD_DATA_REQUEST:
            return{
                ...state,
                loading:true
            }
        case allDashboardActionTypes.DASHBOARD_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                projects:actions.payload
            }
        case allDashboardActionTypes.DASHBOARD_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                error:actions.payload
            }
        case allDashboardActionTypes.ALL_USERS_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                users:actions.payload
            }
        case allDashboardActionTypes.ALL_TASKS_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                tasks:actions.payload,
            }
        default : return state;

    }
}
