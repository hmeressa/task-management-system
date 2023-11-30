import axios from "axios";
import * as authActionTypes from "./authActionTypes";
import { URLst } from "../../utils/constants";
import { ExceptionMap } from "antd/es/result";

export const  loginRequest=()=>{
    return{
        type:authActionTypes.LOGIN_REQUEST
    }
}
export const loginSuccess=(data)=>{
    return{
        type:authActionTypes.LOGIN_SUCCESS,
        payload:data,
    }
}
export const loginFailure=(error)=>{
    return{
        type:authActionTypes.LOGIN_FAILURE,
        payload:error,
    }
}

export const userLoginRequest=(formData)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(loginRequest());
    axios({
        method:"post",
        url:`${URLst}/auth`,
        data:formData,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        // console.log(res,"ressssssssssssssss");
        if(res?.data?.status != 404){
        console.log(res,"response");
        const userData=res.data;
        console.log(userData.data,"userData");
        let permission=[];
        userData?.data?.role?.permission?.map(item=>{
            permission.push(item.slug);
        });
        // console.log(permission,"permission");
        localStorage.setItem("permission",permission);
        localStorage.setItem('firstName',`${userData?.data?.firstName}`);
        localStorage.setItem('lastName',`${userData?.data?.lastName}`);
        localStorage.setItem('email',`${userData?.data?.email}`);
        localStorage.setItem('id',`${userData?.data?.id}`);
        localStorage.setItem("token",`${res?.data?.userToken}`);
        localStorage.setItem("roleType",`${userData?.data?.role?.name}`);
        dispatch(loginSuccess(userData));
        window.location.href = '/dashboard';
    }
    else{
          throw ExceptionMap()
    }
      
    })
    .catch(err=>{
        const error=err.message;
        dispatch(loginFailure(error));
        window.location.href = '/login';

    });

    }
} 



