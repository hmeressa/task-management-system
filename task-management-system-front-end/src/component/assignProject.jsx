/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Modal, Input, Button, DatePicker, Select } from 'antd';

const assignProject = ({ visible, onCancel, onSubmit,title,users }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [Select,onSelect]=useState(null);

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
      visible={visible}
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
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <Select
            style={{ width: 200 }}
            placeholder={placeholder}
            onSelect={onSelect}
        >
          {users.map((option, index) => (
            <Option key={index} value={option?.id}>
              {option.firstName+" "+option.lastName}
            </Option>
       ))}
    </Select>
      </div>
    </Modal>
  );
};

export default assignProject;
