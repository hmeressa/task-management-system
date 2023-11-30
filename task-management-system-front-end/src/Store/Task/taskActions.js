import axios from "axios"
import { URLst } from "../../utils/constants";
import * as taskActionTypes from "./taskActionTypes";

export const fetchTaskDataRequest=()=>{
    return{
        type:taskActionTypes.TASK_DATA_REQUEST,
    }
}
export const fetchTaskDataByIdSuccess=(data)=>{
    return{
        type:taskActionTypes.TASK_BY_ID_SUCCESS,
        payload:data,
    }
}
export const fetchTaskDataFailure=(error)=>{
    return{
        type:taskActionTypes.TASK_BY_ID_SUCCESS,
        payload:error,
    }
}
export const fetchAllTaskDataSuccess=(data)=>{
    return{
        type:taskActionTypes.GET_ALL_TASK_DATA,
        payload:data,
    }
}
export const transferToDoneByinProgressIdSuccess=(data)=>{
    return{
        type:taskActionTypes.TASK_TRANSFER_TO_DONE,
        payload:data,
    }
}

export const taskTransferToInProgressByTodoIdSuccess=(data)=>{
    return{
        type:taskActionTypes.TASK_TRANSFER_TO_IN_PROGRESS,
        payload:data,
    }
}
export const taskTransferToTodoSuccess=(data)=>{
    return{
        type:taskActionTypes.TASK_TRANSFER_TO_IN_PROGRESS,
        payload:data,
    }
}


export  const fetchTasksById=()=>{
    const id=localStorage.getItem('id');
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        const token=localStorage.getItem('token');
        dispatch(fetchTaskDataRequest());
        axios({
            method:"get",
            url:`${URLst}/task/${id}`,
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        .then(res=>{
            const task=res.data;
            console.log(task,"task data");
            dispatch(fetchTaskDataByIdSuccess(task));
        })
        .catch(err=>{
            const error=err.message;
            console.log(error,"task error");
            dispatch(fetchTaskDataFailure);
        });
    }
}
export  const fetchAllTaskData=()=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        const token=localStorage.getItem('token');
        dispatch(fetchTaskDataRequest());
        axios({
            method:"get",
            url:`${URLst}/task`,
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        .then(res=>{
            const task=res.data;
            console.log(task,"all task data");
            dispatch(fetchAllTaskDataSuccess(task));
        })
        .catch(err=>{
            const error=err.message;
            console.log(error,"task error");
            dispatch(fetchTaskDataFailure(error));
        });


    }
}

export const transferToDoneByinProgressId=(inProgressId,taskList)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(fetchTaskDataRequest());
        axios({
            method:"post",
            url:`${URLst}/done/${inProgressId}`,
            data:status,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>{
            const data=res.data;
            const taskIndex= taskList.findIndex(item=>item.id===inProgressId);
            taskList[taskIndex]=data;
            dispatch(transferToDoneByinProgressIdSuccess(taskList));
        })
        .catch(err=>{
            const error=err.message;
            dispatch(fetchTaskDataFailure(error));
        })
    }
}
export const taskTransferToInProgressByTodoId=(todoId,taskList)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        console.log(taskList.filter(item=>item.id === todoId),"taskListt");
        dispatch(fetchTaskDataRequest());
        axios({
            method:"post",
            url:`${URLst}/in-progress/${todoId}`,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>{
            const data=res.data;
            const taskIndex= taskList.findIndex(item=>item.id === todoId);
            taskList[taskIndex]=data;
            dispatch(taskTransferToInProgressByTodoIdSuccess(taskList));
        })
        .catch(err=>{
            const error=err.message;
            dispatch(fetchTaskDataFailure(error));
        })

    }
}
export const taskTransferToTodo=(backlogId,taskList)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        console.log(taskList.filter(item=>item.id === todoId),"taskListt");
        dispatch(fetchTaskDataRequest());
        axios({
            method:"post",
            url:`${URLst}/in-progress/${backlogId}`,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>{
            const data=res.data;
            const taskIndex= taskList.findIndex(item=>item.id === todoId);
            taskList[taskIndex]=data;
            dispatch(taskTransferToTodoSuccess(taskList));
        })
        .catch(err=>{
            const error=err.message;
            dispatch(fetchTaskDataFailure(error));
        })

    }
}
