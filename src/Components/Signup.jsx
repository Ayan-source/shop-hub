import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border rounded-2xl bg-[whitesmoke] w-fit p-[30px_40px]'>
        <h1 className='text-4xl font-bold text-center mb-5'>Sign up</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name' className='text-xl font-bold'>Name</label>
          <input
            id='name'
            type='text'
            placeholder='Enter your name...'
            className='outline-none p-[5px_10px] mt-2 mb-2 bg-gray-100 rounded shadow'
            {...register('name', { required: "Name is required" })}
          />
          {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}

          <label htmlFor='password' className='text-xl font-bold'>Password</label>
          <input
            id='password'
            type='password'
            placeholder='Enter your password...'
            className='outline-none p-[5px_10px] mt-2 bg-gray-100 rounded shadow'
            {...register('password', { required: "Password is required",
              minLength: {
                value: 4,
                message: "Password should be minimum length of 4",
              },
              maxLength: {
                value: 12,
                message: "Password should be maximum length of 12",
              }
            })}
          />
          {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}

          <button type='submit' className='p-2 bg-blue-600 text-white rounded mt-4'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
