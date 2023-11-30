import { MoreOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import dateFormat, { masks } from "dateformat";
import { Link, useParams } from 'react-router-dom';

// import { Pagination } from 'antd';

                
const Table = ({data,setDeleteItem,isUserListOpen,setIsUserListOpen,setSelectedTask,taskList}) => {
    const [isDropDown,setIsDropDown]=useState(false);
    const [clickedRow,setClickedRow]=useState('');
    const { id } = useParams();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">All Tasks</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Number</th>
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Owner</th>
              <th className="text-left p-3 px-5">Created Date</th>
              <th className="text-left p-3 px-5">End Date</th>
              <th className="text-left p-3 px-5">status</th>
              {taskList &&<th className="text-left p-3 px-5">Actions</th>}
            </tr>
          </thead>
          <tbody className='gap-4'>
           {data?.map((item,index)=>
                    <tr className="border-b hover:bg-orange-100 my-4 py-10">
                    <td className="p-3 px-5">{index+1}</td>
                    <td className="p-3 px-5">{item?.name}</td>
                    <td className="p-3 px-5 flex ">
                            {item?.user?.firstName &&
                                       <img src={`${item?.image}`} alt={`${item?.user?.firstName[0] +item?.user?.lastName[0]}`}
                                            className='flex justify-center text-xs items-center h-8 w-8 rounded-full  bg-gray-800 text-white mr-2'/> }
                                       {item?.user?.firstName ??  bgColor.isNotAssigned}
                    </td>
                    <td className="p-3 px-5">{dateFormat(item?.endDate,"fullDate")}</td>
                    <td className="p-3 px-5">{dateFormat(item?.startDate,"fullDate")}</td>
                    <td className="p-3 px-5">{bgColor?.[item?.taskStatus?.status] ?? bgColor?.undefined}</td>
                    <td  className="p-3 px-5 font-bold text-3xl relative">
                                   <MoreOutlined className='cursor-pointer' onClick={()=>{setIsDropDown(!isDropDown);setClickedRow(index)}}/>
                                   {isDropDown && clickedRow==index && (  <div className='flex flex-col space-y-2 rounded absolute -right-9 top-9  bg-gray-400 font-serif py-6 px-6  text-xs capitalize cursor-pointer mr-20'>
                                    <span  className='text-gray-950 text-md' onClick={()=>{setSelectedTask(item);setIsUserListOpen(!isUserListOpen)}}>Assign </span>
                                    <span className='text-gray-950 text-md ' onClick={()=>{setDeleteItem(item?.id)}}>Delete</span>
                                </div>
                              )}
                    </td>
                </tr>
           )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const bgColor = {
  'isNotAssigned': <span className='bg-yellow-300 px-2 py-1 text-black rounded text-xs '>not assigned</span>,
  'open': <span className='bg-green-400 px-2 py-1 rounded  text-black text-xs'>open</span>,
  'closed': <span className='bg-green-600 px-2 py-1 rounded  text-black text-xs '>closed</span>,
  'to-do': <span className='bg-indigo-700 px-2 py-1 rounded  text-white text-xs '>to-do</span>,
  'back-log':<span className='bg-yellow-200 px-2 py-1 rounded text-black  text-xs '>back-log</span>,
  'in-progress':<span className='bg-yellow-400 px-2 py-1  text-black rounded text-xs '>in progress</span>,
  'done':<span className='bg-green-300 px-2 py-1  text-black rounded text-xs '>done</span>,
  'undefined':<span className='bg-red-400 px-2 py-1  text-black rounded text-xs '>undefined</span>,
};

export default Table;
