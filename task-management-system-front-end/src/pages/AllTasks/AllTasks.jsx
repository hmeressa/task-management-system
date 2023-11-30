import React, { useEffect,useState } from 'react'
import { fetchAllTasksData,fetchAllUsersData } from '../../Store';
import { connect } from 'react-redux';
import Table from '../../component/Table';
import Layout from '../../component/Layout';

function AllTasks({fetchAllTasksData,fetchAllUsersData,users,allTasks}) {
    // const array=[1,2,3,4,5,6,7,8];
    const [assignTask,setAssignTask]=useState('');
    const [assignTo,setAssignTo]=useState('');
    // const { id } = useParams();
    const [deleteItem,setDeleteItem]=useState('');
    useEffect(()=>{
      fetchAllTasksData();
      fetchAllUsersData();
    },[]);
    const columns=['Id','Task Name','start date','end date','Status','assigned person'];
    const Rows=['task 1','sep 2023','oct 2023','Open','ahmedin'];
  return (<>
         <Layout>
              <Table data={allTasks} 
                   setDeleteItem={setDeleteItem}
                   users={users}
                   assignTask={assignTask}
                   setAssignTask={setAssignTask}
                   assignTo={assignTo}
                   setAssignTo={setAssignTo}
               />  
            </Layout>
             
  </>   
    
  )
}
export const mapStateToProps=(state)=>{
  return{
    allTasks:state.dashboardReducer.tasks,
    users:state.dashboardReducer.users,

  }
}
export const mapDispatchToProps=(dispatch)=>{
  return{
    fetchAllTasksData:() => dispatch(fetchAllTasksData()),
    fetchAllUsersData:() => dispatch(fetchAllUsersData()),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllTasks);