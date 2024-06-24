import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { products } from '../cloudimages/Cloud';
import './showmore.scss'

const ShowMore = () => {
    const [isShown, setIsShown] = useState(false);
    const toggleShowMore = () =>{
        setIsShown(!isShown);
    };
  return (
    <div>
        {
            isShown && (
      <div className="products">
       <LazyLoadImage className='products' src={products.product1}/> 
       <LazyLoadImage className='products' src={products.product2}/> 
       <LazyLoadImage className='products' src={products.product3}/> 
       <LazyLoadImage className='products' src={products.product4}/> 
       <LazyLoadImage className='products' src={products.product1}/> 
       <LazyLoadImage className='products' src={products.product2}/> 
       <LazyLoadImage className='products' src={products.product3}/> 
       <LazyLoadImage className='products' src={products.product4}/> 
       <LazyLoadImage className='products' src={products.product1}/> 
       <LazyLoadImage className='products' src={products.product2}/> 
       <LazyLoadImage className='products' src={products.product3}/> 
       <LazyLoadImage className='products' src={products.product4}/> 
       </div>
            )
        }
            <button className='btn' onClick={toggleShowMore}>
            {
                isShown ? 'ShowLess' : 'ShowMore'
            }
        </button>
    </div>
  )
}

export default ShowMore