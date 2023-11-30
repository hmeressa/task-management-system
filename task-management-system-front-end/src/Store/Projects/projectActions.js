import axios from "axios";
import moment from "moment";
import * as projectActionTypes from "./projectActionTypes";
import { URLst } from "../../utils/constants";
import { data } from "autoprefixer";

export const  projectDataRequest=()=>{
    return{
        type:projectActionTypes.PROJECT_DATA_REQUEST,
    }
}
export const projectDataSuccess=(data)=>{
    return{
        type:projectActionTypes.PROJECT_DATA_SUCCESS,
        payload:data,
    }
}
export const projectDataFailure=(error)=>{
    return{
        type:projectActionTypes.PROJECT_DATA_FAILURE,
        payload:error,
    }
}
export const getProjectByIdSuccess=(data)=>{
    return{
        type:projectActionTypes.GET_PROJECT_BY_ID,
        payload:data,

    }
}
export const deleteProjectByIdSuccess=(data)=>{
    return{
        type:projectActionTypes.DELETE_PROJECT_BY_ID_SUCCESS,
        payload:data,

    }
}
export const addProjectSuccess=(data)=>{
    return{
        type:projectActionTypes.ADD_PROJECT_SUCCESS,
        payload:data,
    }
}

export const addTaskSuccess=(data)=>{
    return{
        type:projectActionTypes.ADD_TASK_TO_PROJECT,
        payload:data,
    }
}
export const deleteTaskSuccess=(data)=>{
    return{
        type:projectActionTypes.DELETE_TASK_ON_PROJECT,
        payload:data,
    }
}
export const assignTaskSuccess=(project)=>{
    return{
        type:projectActionTypes.ASSIGN_TASK_TO_USER,
        payload:project,
    }
}


export const fetchProjectStatusData=()=>{
    const token=localStorage.getItem("token");
     return (dispatch)=>{
         dispatch(projectDataRequest());
         axios({
             method: "GET",
             url: `${URLst}/project`,
             headers: {
               Authorization: `Bearer ${token}`,
             },
           })
           .then((res)=>{
             const responseData=res.data.project;
             dispatch(projectDataSuccess(responseData));
           })
           .catch((err)=>{
             const errorData=err.message;
             console.log(errorData,"erorororororororo");
             dispatch(projectDataFailure(errorData));
 
           })
         }}

export const addProjectData=(data,projects)=>{
    const token=localStorage.getItem('token');
    const projectName=data?.name;
    const endDate=moment(data?.endDate?.$d).format("YYYY-MM-DD");
    const startDate=moment(data?.startDate?.$d).format("YYYY-MM-DD");
    const projectData={"name":projectName,"startDate":startDate,"endDate" : endDate,"status":"open"};
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"post",
        url:`${URLst}/project`,
        data:projectData,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        const newData=res.data;
        const newProjectData=projects.push(newData);
        dispatch(addProjectSuccess(projects));
    })
    .catch(err=>{
        const error=err.message;
        dispatch(projectDataFailure(error));
    });
    }
} 

export const updateProjectData=(id,data)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"patch",
        url:`${URLst}/project/${id}`,
        data:data,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    });

    }

} 


export const deleteProjectData=(id,projects)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"delete",
        url:`${URLst}/project/${id}`,
         headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        const data=projects?.filter(item=>item?.id !== id);
        dispatch(deleteProjectByIdSuccess(data));
    })
    .catch(err=>{
        dispatch(projectDataFailure(err.message));
    });

    }
} 

export const getProjectById=(id)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"get",
        url:`${URLst}/project/${id}`,
         headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
       const projectData=res.data;
       dispatch(getProjectByIdSuccess(projectData));
    })
    .catch(err=>{
        const error=err.message;
        dispatch(projectDataFailure(error));
    });

    }
} 

export const addTaskToProject=(data,project)=>{
    const token=localStorage.getItem('token');
    const projectName=data?.name;
    const endDate=moment(data?.endDate?.$d).format("YYYY-MM-DD");
    const startDate=moment(data?.startDate?.$d).format("YYYY-MM-DD");
    const projectData={"name":projectName,"startDate":startDate,"endDate" : endDate,"projectId" : project?.id};
    console.log(projectData,"form data");
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"post",
        url:`${URLst}/task`,
        data:projectData,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        const newData=res.data;
        const newProjectData=project?.task?.push(newData);
        dispatch(addTaskSuccess(project));
    })
    .catch(err=>{
        const error=err.message;
        dispatch(projectDataFailure(error));
    });
    }
}
export const deleteTaskOnProject=(id,project)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"delete",
        url:`${URLst}/task/${id}`,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        const newData=res.data;
        const updatedProject = {
            ...project,
            task: project?.task?.filter((task) => task.id !== id),
          };
        dispatch(deleteTaskSuccess(updatedProject));
    })
    .catch(err=>{
        const error=err.message;
        dispatch(projectDataFailure(error));
    });
    }
}

export const taskAssignToUser=(assignTask,assignTo,project)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"post",
        url:`${URLst}/todo/${assignTask}/assignTo/${assignTo}`,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        const newData=res.data.data;
        console.log(newData,"newdatata");
        console.log(assignTask,"assign task");

        const index=project.task.findIndex((task) => task.id === assignTask);
        console.log(index,"index ")
        project.task[index]=newData;
        dispatch(assignTaskSuccess(project));
    })
    .catch(err=>{
        const error=err.message;
        dispatch(projectDataFailure(error));
    });
    }
}
