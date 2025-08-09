import React from 'react';
import { getLocalStorage } from '../../utils/localStorage';

const NewTask = ({ data, updateData, employeeIndex, taskIndex }) => {
  const handleAccept = () => {
    const { employees } = getLocalStorage();
    const emp = employees[employeeIndex];

    emp.tasks[taskIndex].newTask = false;
    emp.tasks[taskIndex].active = true;
    emp.taskStats.newTask--;
    emp.taskStats.active++;

    localStorage.setItem('employees', JSON.stringify(employees));
    updateData(); // ✅ just call this
  };

  const handleReject = () => {
    const { employees } = getLocalStorage();
    const emp = employees[employeeIndex];

    emp.tasks[taskIndex].newTask = false;
    emp.tasks[taskIndex].failed = true;
    emp.taskStats.newTask--;
    emp.taskStats.failed++;

    localStorage.setItem('employees', JSON.stringify(employees));
    updateData();
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm font-semibold rounded'>{data.category}</h3>
        <h4 className='text-base font-medium'>{data.date}</h4>
      </div>
      <h3 className='mt-5 text-2xl font-semibold'>{data.title}</h3>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className='flex justify-between mt-3'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded' onClick={handleAccept}>Accept</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded' onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default NewTask;
