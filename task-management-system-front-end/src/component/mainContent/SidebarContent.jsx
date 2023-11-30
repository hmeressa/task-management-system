import React, { useEffect } from "react";
import CardComponent from "../CardComponent";
import PieChart from "../PieChart";
import { connect } from "react-redux";
import { fetchAllTasksData, fetchAllUsersData, fetchProjectStatusData } from "../../Store";
import Layout from "../Layout";
import { ProjectOutlined, UnorderedListOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

 function SidebarContent({projects,fetchProjectStatusData,fetchAllUsersData,fetchAllTasksData,users,tasks}) {

  useEffect(()=>{
    fetchProjectStatusData();
    fetchAllUsersData();
    fetchAllTasksData();
  },[]);
 


    const array=[1,2,3,4]
    const data = [
      { name: 'Jan', value: 10 },
      { name: 'Feb', value: 20 },
      { name: 'Mar', value: 15 },
      { name: 'Apr', value: 30 },
      { name: 'May', value: 25 },
    ];
  return <>
          <Layout>
            <div className='grid grid-cols-3 space-x-4 mt-20'>
              
              <CardComponent
                    // key={index}
                    text={"All Projects"}
                    number={projects?.length}
                    icon={<ProjectOutlined />}
                    url={"/projects"}
               
                />

                <CardComponent
                        // key={index}
                        text={"All Tasks"}
                        number={tasks?.length}
                        icon={<UnorderedListOutlined/>}
                        url={"/tasks"}
                          />
                  <CardComponent
                      // key={index}
                      text={"All Users"}
                      number={users?.length}
                      icon={<UsergroupAddOutlined />}
                      url={"/users"}

                  />
            </div>
            <div className='flex justify-center items-center text-black font-serif mt-10'>
              <PieChart 
                 labelValue={['users','tasks','projects']}
                 dataValue={[users?.length,tasks?.length,projects?.length]}
                />
              {/* <LineChart data={data}/> */}
            </div>
            </Layout>
         </>

}

export const mapStateToProps=(state)=>{
 return{
   projects:state.projectReducer.allProjects,
   tasks:state.dashboardReducer.tasks,
   users:state.dashboardReducer.users,
   error:state.dashboardReducer.error,
   loading:state.dashboardReducer.loading,
 };
};
export const mapDispatchToProps=(dispatch)=>{
  return{
    fetchProjectStatusData:() => dispatch(fetchProjectStatusData()),
    fetchAllUsersData:() => dispatch(fetchAllUsersData()),
    fetchAllTasksData:() => dispatch(fetchAllTasksData()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SidebarContent);