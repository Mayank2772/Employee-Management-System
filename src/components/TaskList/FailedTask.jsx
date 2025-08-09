import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm font-semibold rounded'>{data.category}</h3>
                <h4 className=' text-base font-medium'>{data.date}</h4>
            </div>
            <h3 className='mt-5 text-2xl font-semibold'>{data.title}</h3>
            <p className='text-sm mt-2'>{data.description}
            </p>
            <div className='mt-8'>
               <h3 className='bg-red-600 px-3 w-16 ml-48 py-1 text-sm font-semibold rounded'>Failed</h3>
            </div>
        </div>
    )
}

export default FailedTask