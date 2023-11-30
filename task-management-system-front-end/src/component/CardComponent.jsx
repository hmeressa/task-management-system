import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

 const  CardComponent = ({ text,status, number,url, id,icon, startDate,setEditItem,setDeleteItem,endDate }) => {

  const handleDelete=(e)=>{
    e.preventDefault();
    setDeleteItem(id);
     
  }
  const handleEdit=()=>{
    e.preventDefault();
    setEditItem(url);

  }
  return (
  // <Link to={`projects/${url}`}>
  <Link to={`${url}`} >
    <div className=" ml-2 mt-2 bg-white rounded p-4 font-serif w-full min-w-[200px] min-h-[250px]">
      <div className="flex items-center">
        <div className="w-3/4">
          <div className="flex justify-between p-0 space-x-6 text-xl font-semibold mb-8"><span>{text}</span> <span className='text-3xl'>{icon}</span></div>
          <div className="text-gray-600"> {number}</div>
          {endDate && (<div className="text-gray-600">
            <span>Start Date: {startDate}</span> - <span className='block'>End Date: {endDate}</span> 
          </div>)}
        </div>
      </div>
     {!icon &&(
     <div className='flex justify-between space-x-2 text-sm font-serif'>
        <div className='mt-5 font-bold '>
            {textColor[status]}
         
        </div>
        <div>
          {/* <span className='text-green-700 text-2xl' onClick={handleEdit}><EditOutlined /></span> */}
          <span className='text-red-500 text-2xl' onClick={handleDelete}><DeleteOutlined /> </span></div>
          
        </div>)}
    </div>
    </Link>
  );
};

const textColor={
  'open':<span className='text-xl text-green-400'>open</span>,
  'closed':<span className='text-xl text-green-900'>closed</span>,
  'inprogress':<span className='text-xl text-yellow-500'>in progress</span>,
  'undefined':<span className='text-xl text-blue-500'>in progress</span>

}

export default CardComponent;
