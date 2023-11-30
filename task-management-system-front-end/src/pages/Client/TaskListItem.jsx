import React, { useState } from 'react';
import Layout from './ClientLayout';
import { connect } from 'react-redux';
import { fetchAllTaskData } from '../../Store';
import { useEffect } from 'react';
import Table from '../../component/Table';
import { SearchOutlined } from '@ant-design/icons';
import SearchComponent from '../../component/SearchComponent';
import { Header } from '../../component/HeaderFile/Header';
function TaskListItem({fetchAllTasks,taskList,error,loading}) {
  const [activeTab, setActiveTab] = useState(1);
  const [searchData,setSearchData]=useState('');
  const [filteredTask,setFilteredTask]=useState();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  useEffect(()=>{
    fetchAllTasks();
  },[]);
  useEffect(()=>{
    setFilteredTask(taskList?.filter(item =>(item?.user?.firstName?.includes(searchData) 
      || item?.name?.includes(searchData)||
      item?.taskStatus?.status?.includes(searchData))));
  },[searchData]);
  return (
    <div>
    <Layout>
      <div className='mt-20'>
          <div className="flex ml-10">
              <span className='border-2 flex items-center space-x-2 border-gray-100 rounded active:border-blue-600 bg-white pl-3 '> 
                     <SearchOutlined className='text-gray-600'/>
                                 <input type="text"  name="searchData" id="search" defaultValue={searchData} 
                                          onChange={(e)=>setFilteredTask(taskList?.filter(item =>
                                                                    (item?.user?.firstName?.includes(e.target.value) 
                                                                    || item?.name?.includes(e.target.value)||
                                                                    item?.taskStatus?.status?.includes(e.target.value))))}
                                                                    className=" py-2 px-1 rounded outline-none" />
                </span>
          </div>
      <Table data={!filteredTask? taskList : filteredTask} taskList={true}/>  
      </div>
    </Layout>
    </div>
  );
}
export const mapStateToProps=(state)=>{
  return{
    taskList:state.taskReducer.taskList,
    error:state.taskReducer.error,
    loading:state.taskReducer.loading,
  }
}
export const mapDispatchToProps=(dispatch)=>{
  return{
    fetchAllTasks: () =>dispatch(fetchAllTaskData()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskListItem);
