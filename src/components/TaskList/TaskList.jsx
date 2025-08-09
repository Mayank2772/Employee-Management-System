import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data, refreshParent }) => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const employeeIndex = employees.findIndex(emp => emp.email === data.email);

  return (
    <div className='flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={task} updateData={refreshParent} employeeIndex={employeeIndex} taskIndex={idx} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} data={task} updateData={refreshParent} employeeIndex={employeeIndex} taskIndex={idx} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} data={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
