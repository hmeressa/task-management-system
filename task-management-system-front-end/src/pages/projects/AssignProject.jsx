import React, { useEffect, useState } from 'react';
import { Modal, Input, Button, Select } from 'antd';

const AssignProject = ({ visible,initialName,selectedTask, onCancel,onAssign,title,userOptions }) => {
  const [selectedUser, setSelectedUser] = useState();
  const handleAssign = () => {
    onAssign(selectedUser);
    setSelectedUser('');
  };
  return (
    <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="assign" className="bg-gray-950 text-white" type="primary" onClick={handleAssign}>
          {selectedTask?.user?.id? "re assign": "assign "}
        </Button>,
      ]}
      style={{ height: '1/3', width: '1/3' }}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <Input
          value={initialName}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          disabled
          className='text-gray-900 font-semibold'
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Assign To</label>
        <Select
          value={selectedUser}
          onChange={(value) => setSelectedUser(value)}
          style={{ width: '100%' }}
        >
         {userOptions.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {`${user?.firstName}   ${user?.lastName}`  }
              </Select.Option>
          ))}
        </Select>
      </div>

    </Modal>
  );
};

export default AssignProject;
