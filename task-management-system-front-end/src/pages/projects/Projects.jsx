import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CardComponent from '../../component/CardComponent'
import Layout from '../../component/Layout'
import { PlusOutlined } from '@ant-design/icons'
import { addProjectData, deleteProjectData, fetchProjectStatusData } from '../../Store'
import CreateProject from './CreateProject'
function Projects({projects,deleteProjectData,fetchProjectStatusData,addProjectData}) {
   const [deleteItem,setDeleteItem]=useState('');
   const [editItem,setEditItem]=useState('');
   const [isOpen,setIsOpen]=useState(false);

   const handlePopupSubmit = (data) => {
      setIsOpen(false);
      addProjectData(data,projects);
   };
      useEffect(()=>{
        fetchProjectStatusData();
      },[]);

      if(deleteItem != ''){
        deleteProjectData(deleteItem,projects);
        setDeleteItem('');
        setEditItem('');
      }

      return (
            <Layout>
              <div className='flex justify-between'>
                <div className='text-3xl text-ellipsis-gray-850 font-serif mt-20'>List of projects</div>
              <div onClick={()=>setIsOpen(!isOpen)} className='flex justify-between gap-2 items-center bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900 px-4 py-2 font-serif text-xl text-white rounded mt-20  '>
                          <PlusOutlined className=''/>create project</div></div>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-4 space-y-4 mt-5 mr-5'>
                    {projects?.map((item,index)=>(
                        <CardComponent
                            key={index}
                            text={item?.name}
                            deleteItem={deleteItem}
                            setDeleteItem={setDeleteItem}
                            editItem={editItem}
                            id={item?.id}
                            setEditItem={setEditItem}
                            number={`Number Of Task ${projects[index]?.task?.length}`}
                            url={`/projects/${item?.id}`}
                            startDate={item?.startDate}
                            endDate={item?.endDate}
                            status={item?.status}
                        />
                    ))}
                  </div>
                  <CreateProject
                        title={"Create Project"}
                        open={isOpen}
                        onCancel={()=>setIsOpen(false)}
                        onSubmit={(data)=>{
                                  handlePopupSubmit(data);
                                  }}
                  />

            </Layout>

  )
}
export const mapStateToProps=(state)=>{
  return{
    projects:state.projectReducer.allProjects,
    error:state.projectReducer.error,
    loading:state.projectReducer.loading,
  };
 };
 export const mapDispatchToProps=(dispatch)=>{
   return{
     fetchProjectStatusData:() => dispatch(fetchProjectStatusData()),
     deleteProjectData:(id,projects)  => dispatch(deleteProjectData(id,projects)),
     addProjectData: (data,projects) => dispatch(addProjectData(data,projects)),
   };
 };
 
 export default connect(mapStateToProps,mapDispatchToProps)(Projects);