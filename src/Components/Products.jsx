import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button1 from './Button1'
import Button2 from './Button2'
import { Cartcontext } from '../Context/CartProvider'

const Products = ({ product}) => {
  const {additems} = useContext(Cartcontext)
  return (
    <div className='product-card bg-white rounded-lg shadow-sm p-4 transition:transform hover:translate-y-1'>
      <img src={product.img} alt={product.name} className='w-full h-48 object-cover rounded-md' />
      <h3 className='product-card-title text-lg font-semibold mt-3'>{product.name}</h3>
      <p className='text-sm text-gray-600 mt-1 line-clamp-2'>{product.description}</p>
      <p className='product-card-price text-xl font-bold mt-3'>${product.price}</p>

      <div className='product-card-actions flex gap-2 mt-4'>
        <Link to={`/products/${product.id}`}><Button1 name="View Details"></Button1></Link>
        <button onClick={() => additems(product.id)}><Button2 name="Add to cart"></Button2></button>
      </div>    
    </div>
  )
}

export default Products
