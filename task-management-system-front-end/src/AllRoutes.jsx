import React from "react";
import Projects from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarContent  from "./component/mainContent/SidebarContent";
import LoginComponent from "./pages/Auth/LoginComponent";
import ProjectTasks from "./pages/projects/ProjectTasks";
import UserData from "./pages/User/UserData";
import AllTasks from "./pages/AllTasks/AllTasks";
// import AllTasks from "./pages/AllTasks/AllTasks";
export  const AllRoutes=()=>{
const token=localStorage.getItem('token');
  return <BrowserRouter>
       <Routes>
          <Route path='/login' element={token==null?<LoginComponent />:<SidebarContent />}/>
               <Route path='dashboard' element={token==null?<LoginComponent />:<SidebarContent />}/>
               <Route path="projects" element={token==null?<LoginComponent />:<Projects/>} />
               <Route path="tasks" element={token==null?<LoginComponent />:<AllTasks/>}></Route>
               <Route path='login' element={token==null?<LoginComponent />:<SidebarContent />} />
               <Route path='users' element={token==null?<LoginComponent />:<UserData />} />
               <Route path='setting' element={token==null?<LoginComponent />:<SidebarContent />} />
               <Route path='about' element={token==null?<LoginComponent />:<SidebarContent />} />
               <Route path="projects/:id" element={token==null?<LoginComponent/>:<ProjectTasks/>}/>
       </Routes>
    </BrowserRouter>;
}
  