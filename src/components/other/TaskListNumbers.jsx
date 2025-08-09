import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 '>
            <div className='rounded-xl w-[40%] py-6 px-9 bg-blue-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.newTask}</h2>
                <h3 className='text-xl font-medium '>New Task</h3>
            </div>
            <div className='rounded-xl w-[40%] py-6 px-9 bg-green-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.completed}</h2>
                <h3 className='text-xl font-medium '>Completed</h3>
            </div>
                        <div className='rounded-xl w-[40%] py-6 px-9 bg-yellow-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.active}</h2>
                <h3 className='text-xl font-medium '>Active</h3>
            </div>
                        <div className='rounded-xl w-[40%] py-6 px-9 bg-red-400'>
                <h2 className='text-2xl font-semibold'>{data.taskStats.failed}</h2>
                <h3 className='text-xl font-medium '>Failed</h3>
            </div>

        </div>
    )
}

export default TaskListNumbers