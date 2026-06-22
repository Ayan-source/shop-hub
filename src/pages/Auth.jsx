import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../Context/AuthProvider'
import { Authmode } from '../Context/AuthmodeProvider'
const Auth = () => {
  const {mode,setmode} = useContext(Authmode)
  const [error,seterror] = useState(null)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const {user,signup,login} = useContext(Authcontext)

  const onSubmit = (data)=>{
    seterror(null)
    let result
    if (mode){
      result = signup(data.email,data.password)
    }
    else{
      result = login(data.email,data.password)
    }
    if(result.result === "fail"){
      seterror(result.error)
    }
    else{
      handleReset()
      navigate("/")
    }
  }

  const handleReset = () => {
    reset()
    seterror(null)
  }

  const toggleMode = () => {
    setmode(!mode)
    seterror(null)
    handleReset()
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100 px-4'>
      <div className='bg-white rounded-2xl shadow-xl w-full max-w-md p-8'>
        <h1 className='text-4xl font-bold mt-2 mb-8 text-gray-900'>
          {mode ? "Sign Up": "LogIn"}
        </h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
            <input
              id='email'
              type='email'
              placeholder='you@example.com'
              className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition'
              {...register('email', { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
            <input
              id='password'
              type='password'
              placeholder='••••••••'
              className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition'
              {...register('password', { required: "Password is required", 
                minLength: { 
                  value: 4, 
                  message: "Password must be at least 4 characters" }
                 })}
            />
            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
          </div>

          <div className='flex items-center justify-between text-sm'>
            <label className='flex items-center gap-2 text-gray-700'>
              <input type='checkbox' className='w-4 h-4 rounded' />
              Remember me
            </label>
            <a href='#' className='text-blue-600 hover:underline font-semibold'>Forgot password?</a>
          </div>

          {error && <p className='text-red-500 text-sm text-center bg-red-50 p-2 rounded'>{error}</p>}
          <button type='submit' className='w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition mt-2'>
            {mode ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className='mt-6 pt-6 border-t border-gray-200 text-center'>
          <p className='text-gray-600 text-sm'>
            {mode? "Already have an account?": "Don't have an account?"}
             
            <button type='button' className='text-blue-600 font-semibold hover:underline ml-1'
            onClick={toggleMode}>
             {mode? "Login": "Signup"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
