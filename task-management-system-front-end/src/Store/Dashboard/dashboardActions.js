import { URLst } from "../../utils/constants";
import  *  as  allDashboardActionTypes from "./dashboardActionTypes";
import axios from "axios";

export const dashBoardDataRequest=()=>{
    return {
         type:allDashboardActionTypes.DASHBOARD_DATA_REQUEST
    }
}

export const dashBoardDataSuccess=(data)=>{
    return {
         type:allDashboardActionTypes.DASHBOARD_DATA_SUCCESS,
         payload:data
    }
}

export const dashBoardDataFailure=(error)=>{
    return {
         type:allDashboardActionTypes.DASHBOARD_DATA_FAILURE,
         payload:error
    }
}
export const allUsersDataSuccess=(data)=>{
    return {
        type:allDashboardActionTypes.ALL_USERS_DATA_SUCCESS,
        payload:data
    }
}
export const allTasksDataSuccess=(data)=>{
    return {
        type:allDashboardActionTypes.ALL_TASKS_DATA_SUCCESS,
        payload:data
    }
}


// export const fetchProjectStatusData=()=>{
//    const token=localStorage.getItem("token");
//     return (dispatch)=>{
//         dispatch(dashBoardDataRequest());
//         axios({
//             method: "GET",
//             url: `${URLst}/project`,
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           })
//           .then((res)=>{
//             const responseData=res.data.project;
//             dispatch(dashBoardDataSuccess(responseData));
//           })
//           .catch((err)=>{
//             const errorData=err.message;
//             dispatch(dashBoardDataFailure(errorData));

//           })
//         }}

export const fetchAllUsersData=()=>{
  const token=localStorage.getItem("token");
   return (dispatch)=>{
       dispatch(dashBoardDataRequest());
       axios({
           method: "GET",
           url: `${URLst}/user`,
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
         .then((res)=>{
           const responseData=res.data;
           dispatch(allUsersDataSuccess(responseData));
         })
         .catch((err)=>{
           const errorData=err.message;
           dispatch(dashBoardDataFailure(errorData));
         })
   }

}
export const fetchAllTasksData=()=>{
     const token=localStorage.getItem('token');
  return (dispatch)=>{
    dispatch(dashBoardDataRequest());
    axios({
      method: "GET",
      url: `${URLst}/task`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res)=>{
      const responseData=res.data;
      const succssMessage="fetched successfully";
      dispatch(allTasksDataSuccess(responseData));
      // dispatch(successMessage(succssMessage));
    })
    .catch((err)=>{
      const errorData=err.message;
      dispatch(dashBoardDataFailure(errorData));
    })
   }
}



