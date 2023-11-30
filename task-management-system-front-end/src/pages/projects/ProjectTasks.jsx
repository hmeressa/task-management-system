import React, { useState } from 'react'
import Table from '../../component/Table'
import Layout from '../../component/Layout';
import { addTaskToProject, deleteTaskOnProject, fetchAllUsersData, getProjectById, taskAssignToUser } from '../../Store';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CreateProject from './CreateProject';
import AssignProject from './AssignProject';
import { useEffect } from 'react';

function ProjectTasks({getProjectById,addTaskToProject,fetchAllUsersData,deleteTaskOnProject,taskAssignToUser,users,project,error,loading}) {
  const [assignTask,setAssignTask]=useState('');
  const [assignTo,setAssignTo]=useState('');
  const { id } = useParams();
  const [deleteItem,setDeleteItem]=useState('');
  const [isUserListOpen,setIsUserListOpen]=useState(false);
  const [isOpen,setIsOpen]=useState(false);
  const [selectedTask,setSelectedTask]=useState({});
  const [assignedUser,setAssignedUser]=useState('');

  const handlePopupSubmit = (data) => {
        setIsOpen(false);
        addTaskToProject(data,project);
    };
  if(deleteItem){
    deleteTaskOnProject(deleteItem,project);
    setDeleteItem('');
  }
  if(selectedTask && assignTo){
    // console.log("hello assign");
    taskAssignToUser(selectedTask?.id,assignTo,project);
    setSelectedTask('');
    setAssignTo('');
  }
  useEffect(()=>{
    fetchAllUsersData();
    getProjectById(id);
  },[]);
  return (<div>
            <Layout>
               <div className='flex justify-end ml-5 px-3 py-2 rounded'>
                   <span onClick={()=>setIsOpen(!isOpen)} className='bg-gray-950 cursor-pointer text-md text-white font-serif px-7 py-2 rounded mt-16'>add task</span></div>
                <Table data={project?.task} 
                       setDeleteItem={setDeleteItem}
                       users={users}
                       setSelectedTask={setSelectedTask}
                       setAssignedUser={setAssignedUser}
                       isUserListOpen={isUserListOpen}
                       setIsUserListOpen={setIsUserListOpen}
                />   
                {isOpen &&
                    <CreateProject
                      title={"create Task"}
                      open={isOpen}
                      onCancel={()=>setIsOpen(false)}
                      onSubmit={(data)=>{
                                handlePopupSubmit(data);
                                }}
                    />
                }
                {/* <assignProject
                    title={"assign task to user"}
                    users={users}
                    onSubmit={()=>console.log("hello assign task")}
                    onCancel={()=>setIsUserListOpen(false)}
                    visible={isUserListOpen}
                />               */}
                  <AssignProject
                       visible={isUserListOpen}
                       onCancel={()=>setIsUserListOpen(false)}
                       selectedTask={selectedTask}
                       title={"Assign task"}
                       userOptions={users}
                       initialName={selectedTask?.name}
                       onAssign={(data)=>{setAssignTo(data);setIsUserListOpen(false)}}
                  />

           </Layout>
           </div>
  
)}
export const mapStateToProps=(state)=>{
  return{
    project:state.projectReducer.project,
    error:state.projectReducer.error,
    loading:state.projectReducer.loading,
    users:state.dashboardReducer.users,

  };
 };
 export const mapDispatchToProps=(dispatch)=>{
   return{
    getProjectById:(id) => dispatch(getProjectById(id)),
    addTaskToProject: (data,project) => dispatch(addTaskToProject(data,project)),
    deleteTaskOnProject: (id,project) => dispatch(deleteTaskOnProject(id,project)),
    fetchAllUsersData:() => dispatch(fetchAllUsersData()),
    taskAssignToUser:(assignTask,assignTo,project) => dispatch(taskAssignToUser(assignTask,assignTo,project)),

   };
 };
 
 export default connect(mapStateToProps,mapDispatchToProps)(ProjectTasks);

