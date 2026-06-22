import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './Components/Navbar'
import AuthProvider from './Context/AuthProvider'
import AuthmodeProvider from './Context/AuthmodeProvider'
const App = () => {
  return (
    <AuthProvider>
      <AuthmodeProvider>
    <div className='bg-[whitesmoke] min-h-screen'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/auth' element={<Auth></Auth>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
    </AuthmodeProvider>
    </AuthProvider>
  )
}

export default App
