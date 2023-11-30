import React from 'react';
import moment from 'moment';
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd';
const TaskBoard = ({ data,setTransferToDone,transferToDone,transferToInProgress,setTransferToInProgress,tasks }) => {
   const now=moment();
  console.log(data,"users data hiluf ");
  const getTasksByStatus = (status) => {
    return data?.filter((item)=>item?.taskStatus?.status==status);
  };

  const todoTasks = getTasksByStatus('to-do');
  const inProgressTasks = getTasksByStatus('in-progress');
  const doneTasks = getTasksByStatus('done');
  const todoItems = [
    { id: 'task-1', content: 'Task 1' },
    { id: 'task-2', content: 'Task 2' },
    // Add more tasks as needed
  ];
  
  const inProgressItems = [
    // Tasks in progress
  ];
  
  const doneItems = [
    // Completed tasks
  ];
  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // Item dropped outside of lists
    }
  
    const sourceArray = getList(result.source.droppableId);
    const destinationArray = getList(result.destination.droppableId);
    const [reorderedItem] = sourceArray.splice(result.source.index, 1);
    destinationArray.splice(result.destination.index, 0, reorderedItem);
  
    // Update the state to trigger a re-render
    // setTodoItems([...todoItems]);
    // setInProgressItems([...inProgressItems]);
    // setDoneItems([...doneItems]);
  };
  
  
  return (
    <div className="flex flex-row justify-center space-x-6 mt-20">
        <div className='flex bg-'></div>
      <div className="w-1/3">
        <div className="bg-blue-200 p-4 rounded">
          <h2 className="text-xl font-bold rounded">Todo</h2>
          {todoTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2 rounded font-serif">
            <p className="font-bold">{task.name}</p>
              <p>belongs To : {task?.project?.name}</p>
              <p>Start Date: {task?.startDate}</p>
              <p>End Date: {task?.endDate}</p>
              <p>{daysLeft(task?.endDate)}</p>

              
              <p>
                 <button className='bg-indigo-900 text-white text-xs rounded mb-0 mt-4 px-6 py-2' onClick={()=>handleTransferToInProgress(task?.id)}>transfer</button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-yellow-200 p-4 rounded">
          <h2 className="text-xl font-bold rounded">In Progress</h2>
          {inProgressTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2 font-serif rounded">
              <p className="font-bold">{task.name}</p>
              <p>belongs To : {task?.project?.name}{"  project"}</p>
              <p>Start Date: {task?.startDate}</p>
              <p>End Date: {task?.endDate}</p>
              <p>
              <button className='bg-yellow-600 text-white text-xs rounded mb-0 mt-4 px-6 py-2' onClick={()=>handleTransferToDone(task?.id)}>transfer</button>
              </p>
              </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-green-200 p-4 rounded ">
          <h2 className="text-xl font-bold rounded">Done</h2>
          {doneTasks.map((task) => (
            <div key={task.id} className=" bg-white p-2 m-2 rounded font-serif text-gray-900">
              <p className="font-bold">{task.name}</p>
              <p>belongs To : {task?.project?.name}</p>
              <p>Start Date: {task.startDate}</p>
              <p>End Date: {task.endDate}</p>
              <p className='mt-4'><span className='bg-green-600 text-white text-xs rounded mb-0 mt-4 px-6 py-2 font-serif font-bold'>pending to approval ....</span></p>
            </div>
          ))}
        </div>
      </div>
    </div> 

  );
};

export default TaskBoard;
