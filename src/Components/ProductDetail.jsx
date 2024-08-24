import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products'
import Sdata from './Sdata'
import './ProductDetail.css'
function ProductDetail() {
    const {id} = useParams()

    const [product , setProduct] = useState({})

    const [relatedProduct , setRelatedProduct] = useState([])

    useEffect(()=>{
        const filterProduct = Sdata.filter((product)=>product.id == id)

        const relatedProduct = Sdata.filter((product)=>product.category === product.category)

        setProduct(filterProduct[0])

        setRelatedProduct(relatedProduct)
    }, [id , product.category])
  return (
    <div>
    <div className="container con">
        <div className="img">
            <img src={product.imgSrc} style={{width:'19rem'}} alt="" />
        </div>
        <div className="text-center">
            <h1 className='card-title'>
                {product.title}
            </h1>
            <p>{product.description}</p>
            <button className='btn btn-primary mx-3'>{product.price}</button>
            <button className='btn btn-warning'> Add to Cart</button>
        </div>   
    </div>
    <h1 className='text-center'>Related Products</h1>
    <Products Sdata={relatedProduct} />
    </div>
  )
}

export default ProductDetail
