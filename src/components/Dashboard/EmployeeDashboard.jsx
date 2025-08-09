import React, { useEffect, useState } from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { getLocalStorage } from '../../utils/localStorage';

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState(() => {
    const { employees } = getLocalStorage();
    return employees.find(emp => emp.email === props.data.email);
  });

  // Update state from localStorage
  const refreshFromStorage = () => {
    const { employees } = getLocalStorage();
    const updated = employees.find(emp => emp.email === props.data.email);
    if (updated) setEmployeeData({ ...updated });
  };

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={employeeData} />
      <TaskListNumbers data={employeeData} />
      <TaskList data={employeeData} refreshParent={refreshFromStorage} />
    </div>
  );
};

export default EmployeeDashboard;
