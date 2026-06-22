import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button1 from './Button1'
import Button2 from './Button2'
import { Authcontext } from '../Context/AuthProvider'
import { Authmode } from '../Context/AuthmodeProvider'

const Navbar = () => {
  const { user, logout } = useContext(Authcontext)
  const {mode,setmode} = useContext(Authmode)
  return (
    <div>
      <nav className='bg-white flex items-center justify-around shadow-[0_2px_4px_rgba(0,0,0,0.1)] sticky z-100 pt-3 pb-3'>
        <Link to="/" className="font-semibold text-4xl">ShopHub</Link>
        <div className='text-xl flex gap-10'>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
        </div>
        <div className='text-xl flex gap-5 items-center'>
            {user ? (
              <>
                <span className='text-gray-700 text-sm'>Welcome, {user.email}</span>
                <button onClick={logout} className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>Logout</button>
              </>
            ) : (
              <>
                <Link to="/auth" onClick={()=>{setmode(false)}}><Button1 name="Login"></Button1></Link>
                <Link to="/auth" onClick={()=>{setmode(true)}}><Button2 name="Signup"></Button2></Link>
              </>
            )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
