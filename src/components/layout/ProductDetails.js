import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
      <h2>Product Details Page</h2>
      <p>{params.id}</p>
    </div>
  )
}

export default ProductDetails
