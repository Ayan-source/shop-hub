import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { findProduct } from '../data/products'
import Button1 from '../Components/Button1'
import Button2 from '../Components/Button2'

const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const currentProduct = findProduct(Number(id))

        if (!currentProduct) {
            navigate("/")
            return
        }

        setProduct(currentProduct)
    }, [id, navigate])

    if (!product) {
        return (
          <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100'>
            <p className='text-gray-600 font-medium'>Loading...</p>
          </div>
        )
    }

  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-gray-100 px-4 py-10'>
      <div className='mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200'>
        <div className='grid gap-0 md:grid-cols-2'>
          <div className='bg-gray-100 p-6 md:p-8 flex items-center justify-center'>
            <img
              src={product.img}
              alt={product.name}
              className='h-80 w-full max-w-md rounded-2xl object-cover shadow-lg'
            />
          </div>

          <div className='p-6 md:p-10 flex flex-col justify-center'>
            <p className='mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700'>
              Product Details
            </p>
            <h1 className='text-3xl font-bold text-gray-900 md:text-4xl'>{product.name}</h1>
            <p className='mt-4 text-3xl font-bold text-blue-600'>${product.price}</p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              {product.description}
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
                <Link
                to='/checkout'
                className='inline-flex items-center justify-center rounded-lg border  px-5 py-3 font-semibold bg-[#007bff] text-white
                transition hover:bg-blue-800'
              >
                Add to Cart
              </Link>
              <Link
                to='/'
                className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50'
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
