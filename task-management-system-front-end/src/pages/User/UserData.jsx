import React, { useEffect } from 'react'
import UserList from '../../component/UserList'
import { fetchAllUsersData } from '../../Store';
import Layout from '../../component/Layout';
import { connect } from 'react-redux';

function UserData({fetchAllUsersData,users,error,loading}) {

  useEffect(()=>{
    fetchAllUsersData();
  },[]);

  return (
    <Layout>
      <div>
          <UserList users={users} />
      </div>
    </Layout>
  )
}

export const mapStateToProps=(state)=>{
  return{
    users:state.dashboardReducer.users,
    error:state.dashboardReducer.error,
    loading:state.dashboardReducer.loading,
  };
 };
 export const mapDispatchToProps=(dispatch)=>{
   return{
    fetchAllUsersData:() => dispatch(fetchAllUsersData()),
   };
 };
 
 export default connect(mapStateToProps,mapDispatchToProps)(UserData);


