import React, { useState } from 'react';
import { Modal, Input, Button, DatePicker } from 'antd';

const CreateProject = ({open,onCancel, onSubmit,title }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleOk = () => {
    const data = {
      name,
      startDate,
      endDate,
    };
    onSubmit(data);
    setName('');
    setStartDate(null);
    setEndDate(null);
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
