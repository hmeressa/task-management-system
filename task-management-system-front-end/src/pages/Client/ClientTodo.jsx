import React, { useState } from 'react'
import Layout from './ClientLayout';
import { connect } from 'react-redux';
import { fetchAllTaskData, fetchTasksById, taskTransferToInProgressByTodoId, taskTransferToTodo, transferToDoneByinProgressId } from '../../Store';
import { useEffect } from 'react';
import moment from 'moment';
import { DndProvider,useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Pictures from './Pictures';
import { useDrag } from 'react-dnd/dist';
import Tasks from './Tasks';
import taskDetails from './taskDetails';
function ClientTodo({fetchAllTasks,taskTransferToTodo,taskTransferToDoneByinProgressId,taskTransferToInProgressByTodoId,taskList,userTask,task,error,loading}) {
    
  const [draggedItem,setDraggedItem]=useState();   
  const [droppedImages, setDroppedImages] = useState([]);
  const [todo,setTodo]=useState([]);
  const [inProgress,setInProgress]=useState([]);
  const [done,setDone]=useState([]);
  const [taskDetail,setTaskDetail]=useState('');
  const [visible,setVisible]=useState('');
  useEffect(() => {
    // Filter the userTask array into three separate arrays
    const todoTasks = userTask.filter((item) => item.taskStatus?.status === 'to-do');
    const inProgressTasks = userTask.filter((item) => item.taskStatus?.status === 'in-progress');
    const doneTasks = userTask.filter((item) => item.taskStatus?.status === 'done');

    setTodo(todoTasks);
    setInProgress(inProgressTasks);
    setDone(doneTasks);
  }, [userTask]); // Re-run the effect when userTask changes

  const imageSource=[
      {
        id:1,
        url:'../public/4258468533.jpg',
      },
      {
        id:2,
        url:'../public/images 2.jpg',
      },
      {
        id:3,
        url:'../public/image .jpg',
      },
     ]
     const [board,setBoard]=useState([  {
      id:5,
      url:'../public/4258468533.jpg',
    },]);

    useEffect(()=>{
        fetchAllTasks();
    },[]);
    // const daysLeft=(endDate)=>{
    //     const currentDate=moment();
    //     const targetDate=moment(endDate);
    //     const remainingDate=targetDate.diff(currentDate, 'days');
    //      return <span classname="bg-red-500 text-xs text-black px-3 py-1 rounded">{remainingDate}</span>
    //                             || <span classname="bg-green-500 text-xs text-white px-3 py-1 rounded">{remainingDate}</span>;
    // }
    // const getTasksByStatus = (status) => {
    //     return userTask?.filter((item)=>item?.taskStatus?.status==status);
    //   };
    const handleTransferToInProgress=(id)=>{
        taskTransferToInProgressByTodoId(id,taskList);
    }
    const handleTransferToDone=(id)=>{
        taskTransferToDoneByinProgressId(id,taskList);
    }
   
  const handleDrop = (droppedImage) => {
    // Handle the dropped image here
    setDroppedImages((prevImages) => [droppedImage?.task, ...prevImages]);
  };
  const handleOnPending=(droppedImage)=>{
    
        switch(droppedImage?.task?.taskStatus?.status){
          case 'done':
              return ;
          case 'to-do':
                const filterTodo=todo?.filter(item=>item?.id != droppedImage?.task?.id);
                setTodo(filterTodo);
          case 'in-progress':
                const filterInProgress=inProgress?.filter(item=>item?.id != droppedImage?.task?.id);
                setInProgress(filterInProgress);

          default:
            droppedImage.task.taskStatus.status='done';
            setDone((prevImages) => [droppedImage?.task, ...prevImages]);
            taskTransferToDoneByinProgressId(droppedImage?.task?.id);
        }
  }
  const handleOnInTodo=(droppedImage)=>{
       switch(droppedImage?.task?.taskStatus?.status){
        case 'to-do':
             return ;
        case 'in-progress':
              const filterInProgress=inProgress?.filter(item=>item?.id != droppedImage?.task?.id);
              setInProgress(filterInProgress);
        case 'done':
              const filterDoneTask=done?.filter(item=>item?.id != droppedImage?.task?.id);
              setDone(filterDoneTask);
        default:
          droppedImage.task.taskStatus.status='to-do';
          setTodo((prevImages) => [droppedImage?.task, ...prevImages]);
          taskTransferToTodo(droppedImage?.task?.id,taskList);
       }
  }
  const handleOnInProgress=(droppedImage)=>{
        switch(droppedImage?.task?.taskStatus?.status){
          case 'in-progress':
              return ;
          case 'to-do':
                const filterTodo=todo?.filter(item=>item?.id != droppedImage?.task?.id);
                setTodo(filterTodo);
          case 'done':
                const filterDoneTask=done?.filter(item=>item?.id != droppedImage?.task?.id);
                setDone(filterDoneTask);
          default:
            droppedImage.task.taskStatus.status='in-progress';
            setInProgress((prevImages) => [droppedImage?.task, ...prevImages]);
            taskTransferToInProgressByTodoId(droppedImage?.task?.id);
        }
    
  }
  return (
    <Layout>
   <div className="flex flex-row justify-center space-x-1 mt-24">
   <div className="w-1/3">
        <div className="bg-blue-200 p-2 rounded">
          <h2 className="text-xl font-bold rounded">Todo</h2>
          {todo?.map((task)=>(
               <Tasks 
                    onDrop={(item)=>handleOnInTodo(item)}
                    key={task?.id}
                    task={task}
                    setTaskDetail={setTaskDetail}
                    setVisible={setVisible}
                    visible={visible}
               />
          ))}
        </div>
      </div>
    <div className="w-1/3">
        <div className="bg-yellow-200 p-2 rounded">
          <h2 className="text-xl font-bold rounded">In Progress</h2>
          {inProgress?.map((task)=>(
            <Tasks 
                onDrop={(item)=>handleOnInProgress(item)}
                key={task?.id}
                task={task}
                setTaskDetail={setTaskDetail}
                setVisible={setVisible}
                visible={visible}
           />
          ))}
        </div>
      </div>
    <div className="w-1/3">
        <div className="bg-green-200 p-2 rounded ">
          <h2 className="text-xl font-bold rounded">Done</h2>
          {done?.map((task)=>(
                 <Tasks 
                      onDrop={(item)=>handleOnPending(item)}
                      key={task?.id}
                      task={task}
                      setTaskDetail={setTaskDetail}
                      setVisible={setVisible}
                      visible={visible}

                />
          ))}
        </div>
      </div>
    </div>
    <taskDetails
        visible={visible}
        onClose={()=>{setVisible(false)}}
        task={taskDetail}
     />
    </Layout>

  )
}

export const mapStateToProps=(state)=>{
    const id=localStorage.getItem('id');
    return{
      taskList:state.taskReducer.taskList,
      userTask:state.taskReducer.taskList?.filter(item=>item?.user?.id==id),
      error:state.taskReducer.error,
      loading:state.taskReducer.loading,
    }
  }
  export const mapDispatchToProps=(dispatch)=>{
    return{
        fetchTasksById: () => dispatch(fetchTasksById()),
        taskTransferToDoneByinProgressId: (inprogressId,taskList) => dispatch(transferToDoneByinProgressId(inprogressId,taskList)),
        taskTransferToInProgressByTodoId: (todoId,taskList) => dispatch(taskTransferToInProgressByTodoId(todoId,taskList)),
        taskTransferToTodo: (backlogId,taskList) => dispatch(taskTransferToTodo(backlogId,taskList)),
        fetchAllTasks: () => dispatch(fetchAllTaskData()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ClientTodo);