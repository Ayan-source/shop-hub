import React from 'react'

const Button1 = ({name}) => {
  return (
    <div>
      <button className='bg-gray-500 text-white p-[8px_20px] rounded active:-translate-y-1 hover:bg-[gray]'>{name}</button>
    </div>
  )
}

export default Button1
