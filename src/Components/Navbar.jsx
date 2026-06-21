import React from 'react'
import { Link } from 'react-router-dom'
import Button1 from './Button1'
import Button2 from './Button2'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-white flex items-center justify-around shadow-[0_2px_4px_rgba(0,0,0,0.1)] sticky z-100 pt-3 pb-3'>
        <Link to="/" className="font-semibold text-4xl">ShopHub</Link>
        <div className='text-xl flex gap-10'>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
        </div>
        <div className='text-xl flex gap-5'>
            <Link to="/auth"><Button1 name="Login"></Button1></Link>
            <Link to="/auth"><Button2 name="Signup"></Button2></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
