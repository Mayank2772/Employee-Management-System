import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-10'>
        <h1 className='flex mb-14 justify-center text-3xl font-semibold'>Welcome Back!</h1>
        <form onSubmit={(e) => {
          SubmitHandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your Email' />
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400 mt-3' type="password" placeholder='Enter Password' />
          <button className='mt-5 text-white outline-none bg-emerald-600 border-2 border-emerald-600 text-xl py-3 px-5 rounded-xl w-full'>Log In</button>
        </form>
      </div>

    </div>
  )
}

export default Login