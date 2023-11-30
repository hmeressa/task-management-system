import React from 'react'
import { useDrag, useDrop } from 'react-dnd';
import moment from 'moment';

function Tasks({task,onDrop,setTaskDetail,setVisible,visible}) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { task: task },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    const dateStatus=(date)=>{
        const now=moment(moment(date).format('YYYY-MM-DD'),'YYYY-MM-DD')
        const dueDate=moment(moment(Date()).format('YYYY-MM-DD'),'YYYY-MM-DD');
        const diff=now.diff(dueDate, 'days');
        return diff <=0 ? <span className='bg-red-100 px-4 py-1 ml-10 rounded text-red-600 text-xs'>{"failed"}</span>
                        : diff<=2 ? <span className='bg-yellow-300 px-4 py-1 ml-10 rounded text-yellow-600 text-xs'>{"warning"}</span>
                        : <span className='bg-green-200 px-4 py-1 ml-10 rounded text-green-600 text-xs'>{"todo"}</span>
        }            
      const [, drop] = useDrop({
        accept: 'div',
        drop: (droppedImage) => onDrop(droppedImage),
      });

  return (
         <div
            onClick={()=>{setTaskDetail(task);setVisible(!visible)}}
            ref={(node) => drag(drop(node))}
            style={{
            opacity: isDragging ? 1 : 1,
            bgColor: isDragging ? "blue":"white",
            cursor: 'grab',
            }}
      >
           <div key={task.id} className="bg-white p-2 m-2 rounded font-serif">
                <p className="font-bold">{task.name}</p>
                <p>belongs To : {task?.project?.name}</p>
                <p>Start Date: {moment(task?.startDate).format('DD-MM-YYYY')}</p>
                <p>End Date: {moment(task?.endDate).fromNow()}</p>
                <p className='flex justify-end'> {dateStatus(task?.endDate)} </p>
                <p>
                    {/* <button className={`${bgColor} text-white text-xs rounded mb-0 mt-4 px-6 py-2`}  onClick={()=>onDrop(task?.id)}>{text}</button> */}
                </p>
            </div>
      </div>
          
  )
}

export default Tasks;