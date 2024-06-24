import React from 'react'
import { cloudName, products, shop, slick } from '../cloudimages/Cloud'
import './shop.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Shop = () => {
  return ( 
    <div>

      <div className="mainShop">
       
      </div>
<div className="shop">
<LazyLoadImage className='shop' src={products.product1}/>
<LazyLoadImage className='shop' src={products.product2}/>
<LazyLoadImage className='shop' src={products.product3}/>
<LazyLoadImage className='shop' src={products.product4}/>
<LazyLoadImage className='shop' src={products.product1}/>
<LazyLoadImage className='shop' src={products.product2}/>
<LazyLoadImage className='shop' src={products.product3}/>
<LazyLoadImage className='shop' src={products.product4}/>
<LazyLoadImage className='shop' src={products.product1}/>
<LazyLoadImage className='shop' src={products.product2}/>
<LazyLoadImage className='shop' src={products.product3}/>
<LazyLoadImage className='shop' src={products.product4}/>
<LazyLoadImage className='shop' src={products.product1}/>
<LazyLoadImage className='shop' src={products.product2}/>
<LazyLoadImage className='shop' src={products.product3}/>
<LazyLoadImage className='shop' src={products.product4}/>
       </div>
            <div className="pagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                    <span>Next</span>
                    </div>
    </div>
  )
}

export default Shop