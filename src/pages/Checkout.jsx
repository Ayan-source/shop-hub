import React, { useContext } from 'react'
import { Cartcontext } from '../Context/CartProvider'
import products from '../data/products'

const Checkout = () => {
  const {cartitems, removeitems, updatequantity} = useContext(Cartcontext)
  
  // Get full product details for cart items
  const cartWithDetails = cartitems.map(item => ({
    ...item,
    ...products.find(prod => prod.id === item.id)
  }))
  
  // Calculate totals
  const subtotal = cartWithDetails.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  if(cartitems.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold text-gray-700 mb-4'>Your Cart is Empty</h1>
        <p className='text-gray-500 text-lg'>Add some products to get started!</p>
      </div>
    )
  }

  return (
    <div className='p-8 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold mb-8 text-gray-800'>Shopping Cart</h1>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Cart Items */}
        <div className='lg:col-span-2'>
          <div className='bg-white rounded-lg shadow-md'>
            {cartWithDetails.map((item) => (
              <div key={item.id} className='flex items-center gap-4 p-6 border-b hover:bg-gray-50 transition'>
                {/* Product Image */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className='w-24 h-24 object-cover rounded'
                />
                
                {/* Product Info */}
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-gray-800'>{item.name}</h3>
                  <p className='text-gray-600 text-sm mt-1'>{item.description.substring(0, 60)}...</p>
                  <p className='text-blue-600 font-bold mt-2'>${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className='flex items-center gap-3 bg-gray-100 rounded-lg p-2'>
                  <button
                    onClick={() => updatequantity(item.id, item.quantity - 1)}
                    className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600 transition font-bold'
                  >
                    −
                  </button>
                  <span className='w-8 text-center font-semibold'>{item.quantity}</span>
                  <button
                    onClick={() => updatequantity(item.id, item.quantity + 1)}
                    className='w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded hover:bg-green-600 transition font-bold'
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className='text-right w-24'>
                  <p className='text-gray-600 text-sm mb-2'>Subtotal</p>
                  <p className='text-lg font-bold text-gray-800'>${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeitems(item.id)}
                  className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium'
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className='bg-white rounded-lg shadow-md p-6 h-fit sticky top-20'>
          <h2 className='text-2xl font-bold mb-6 text-gray-800'>Order Summary</h2>
          
          <div className='space-y-4 mb-6'>
            <div className='flex justify-between text-gray-700'>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-gray-700'>
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className='border-t-2 pt-4 flex justify-between text-xl font-bold text-gray-800'>
              <span>Total:</span>
              <span className='text-blue-600'>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold text-lg'>
            Proceed to Checkout
          </button>
          
          <button className='w-full mt-3 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-bold'>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
