import React from 'react'
import products from '../data/products'
import Products from '../Components/Products'

const Home = () => {
    const prods = products
  return (
    <div>
      <div className='flex flex-col items-center gap-7 pt-16 pb-8'>
        <h1 className='font-semibold text-[#333] text-5xl'>Welcome to ShopHub</h1>
        <p className='font-light text-gray-500'>Discover amazing products at great prices</p>
      </div>
      <div className='p-[0px_2rem]'>
        <h2 className='font-semibold text-3xl'>Our Products</h2>
        <div className='mt-3 grid grid-cols-3 gap-3'>
            {prods.map((product)=>(
            <Products product={product} key={product.id}></Products>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home
