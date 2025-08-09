import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {

    const [userData ,setUserData] = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-84'>
            <div className='bg-red-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed</h5>

            </div>
            <div id = 'AllTask' className='overflow-y-auto'> 
                {userData.map(function (elem,idx) {
                    return <div key={idx} className='border-2 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 text-lg font-medium'>{elem.firstname}</h2>
                        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskStats.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-300'>{elem.taskStats.active}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-green-600'>{elem.taskStats.completed}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskStats.failed}</h5>
                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask