import React from 'react'
import { Modal, Button, List } from 'antd';
function  taskDetails({ task, visible, onClose }){
  return (
        <Modal
          title="Task Details"
          visible={visible}
          onCancel={onClose}
          footer={[
            <Button key="close" onClick={onClose}>
              Close
            </Button>
          ]}
          width="3/5" // Set the width to 3/5
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold">{task.taskName}</h3>
            <p className="text-gray-500 text-sm">
              Created: {task.createdDate}, Updated: {task.updatedDate}
            </p>
            <p className="my-4">{task.taskDescription}</p>
    
            <h4 className="text-lg font-semibold mt-4">Assigned Users:</h4>
            <List
              dataSource={task.assignedUsers}
              renderItem={(user) => (
                <List.Item>
                  {user}
                </List.Item>
              )}
            />
          </div>
        </Modal>
      );
    };

export default taskDetails