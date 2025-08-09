import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const submiHandler = (e) => {
        e.preventDefault();
        const task = { title, description, date, assignTo, category, active: false, newTask: true, completed: false, failed: false }

        const data = userData.map(user => {
            if (user.firstname === assignTo) {
                return {
                    ...user,
                    tasks: [task, ...user.tasks],
                    taskStats: {
                        ...user.taskStats,
                        newTask: user.taskStats.newTask + 1
                    }
                };
            }
            return user;
        });
        setUserData(data);
        localStorage.setItem('employees', JSON.stringify(data));
        setTitle('')
        setDescription('')
        setDate('')
        setAssignTo('')
        setCategory('')
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                submiHandler(e)
            }} className='flex  flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={date} onChange={(e) => {
                            setDate(e.target.value)
                        }} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" placeholder='dd/mm/yyyy' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={assignTo} onChange={(e) => {
                            setAssignTo(e.target.value)
                        }} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Development,etc.....' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} required className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" placeholder='Detailed description of task (Max 500 words)'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask