import React, { useState } from 'react';
import { Modal, Input, Button, DatePicker, Select } from 'antd';

const CreateProject = ({open,onCancel, onSubmit,title,users }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [projectOwner,setProjectOwner]=useState(null);
  const optionArray=users?.map(user=>{return {value:user.id,label:user.firstName+"  " + user.lastName}})
  const handleOk = () => {
    const data = {
      name,
      startDate,
      endDate,
      projectOwner,
    };
    onSubmit(data);
    setName('');
    setStartDate(null);
    setEndDate(null);
    setProjectOwner(null);
  };
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit"  className='bg-gray-950 text-white' type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
      style={{ height: '1/3' ,width:'1/3'}}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      {title==="Create Project" && <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">project Owner</label>
      <Select
        placeholder={"select user"}
        defaultValue={projectOwner}
        style={{
          width: 470,
        }}
        onChange={(value)=>setProjectOwner(value)}
        options={optionArray}
      />
      </div></>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
        <DatePicker
          value={startDate}
          onChange={(date) => setStartDate(date)}
          style={{ width: '100%' }}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
        <DatePicker
          value={endDate}
          onChange={(date) => setEndDate(date)}
          style={{ width: '100%' }}
        />
      </div>
    </Modal>
  );
};

export default CreateProject;
