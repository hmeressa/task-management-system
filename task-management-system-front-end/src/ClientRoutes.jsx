/* eslint-disable no-unused-vars */
import React from "react";
import Projects from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarContent  from "./component/mainContent/SidebarContent";
import LoginComponent from "./pages/Auth/LoginComponent";
import ProjectTasks from "./pages/projects/ProjectTasks";
// import UserData from "./pages/User/UserData";
// import AllTasks from "./pages/AllTasks/AllTasks";
import ClientDashboard from "./pages/Client/ClientDashboard";
import TaskListItem from "./pages/Client/TaskListItem";
import ClientTodo from "./pages/Client/ClientTodo";

export  const ClientRoutes=()=>{
const token=localStorage.getItem('token');
  return <BrowserRouter>
       <Routes>
          <Route path='/client' element={token==null?<LoginComponent />:<SidebarContent />}/>
               <Route path='/client/dashboard' element={token==null?<LoginComponent />:<ClientDashboard />}/>
               <Route path="/client/projects" element={token==null?<LoginComponent />:<ClientDashboard/>} />
               <Route path="/client/tasks" element={token==null?<LoginComponent />:<TaskListItem/>}/>
               <Route path='login' element={token==null?<LoginComponent />:<ClientDashboard />} />
               <Route path='client/board' element={token==null?<LoginComponent />:<ClientTodo/>} />
               <Route path='/client/setting' element={token==null?<LoginComponent />:<ClientDashboard />} />
               <Route path='/client/about' element={token==null?<LoginComponent />:<ClientDashboard />} />
               <Route path="/client/projects/:id" element={token==null?<LoginComponent/>:<ClientDashboard/>}/>
       </Routes>
    </BrowserRouter>;
}
  