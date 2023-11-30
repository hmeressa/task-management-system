import React from 'react';
import CardComponent from '../../component/CardComponent';

const TableData = ({ data,setTransferToDone,transferToDone,transferToInProgress,setTransferToInProgress }) => {
    // console.log(data[0]?.taskStatus.status,"Hiluf");
  return (
    <div>
        <div className='flex justify-between mt-20 mx-10'>
                    <div className="px-6 py-3  text-xl  text-gray-950 uppercase">To do</div>
                    <div className="px-6 py-3  text-xl text-gray-950 uppercase ">In Progress</div>
                    <div className="px-6 py-3  text-xl text-gray-950 uppercase ">Done</div>
        </div>
        <div className='flex justify-between mt-5 mx-10 space-y-5'>
               {/* <div className='flex flex-col justify-start space-y-3'>
                    {data?.map(item=>item?.taskStatus?.status=="to-do" &&
                            <div> 
                                <div className='bg-yellow-200 px-10 py-6 rounded text-black flex flex-col space-y-2 '>
                                    <span>{item?.name}</span>
                                    <span className='text-xs text-black'>{`from project:  ${item?.project?.name}`}</span>
                                    <button className='bg-indigo-900  text-white px-3 py-1 text-xs rounded mb-0 mt-4' onClick={()=>setTransferToInProgress(item?.id)}>transfer</button>
                                </div>
                             </div>
                        )}
                </div>
                <div className='flex flex-col justify-center space-y-3 '>
                    {data?.map(item=>item?.taskStatus?.status=="in-progress" && 
                           <div>
                                <div className='bg-yellow-900  text-gray-950 px-10 py-6 rounded flex flex-col space-y-4 font-serif'>
                                    <span>{item?.name}</span>
                                    <span className='text-xs text-gray-950'>{`from project:  ${item?.project?.name}`}</span>
                                   <button className='bg-indigo-900 text-white text-xs rounded mb-0 mt-4' onClick={()=>setTransferToDone(item?.id)}>done</button>

                                </div>
                            </div>
                        )}
                </div>
                <div className='flex flex-col justify-center space-y-3 '>
                    {data?.map(item=>item?.taskStatus?.status=="done" && 
                            <div>
                                <div className='bg-green-800 text-white  px-10 py-6 rounded flex flex-col space-y-2'>
                                    <span>{item?.name}</span>
                                    <span className='text-xs text-black'>{`from project:  ${item?.project?.name}`}</span>                                
                                </div>
                            </div>

                        )}
                 </div> */}
            </div>
    </div>
   
  );
};

export default TableData;
