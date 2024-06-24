import React from 'react'
import { useRecoilState } from 'recoil'
import { cartNumber } from '../atoms/Cart'
import { RangeImages, cloudName, furniro, main, products, share, shop, slick } from '../cloudimages/Cloud';
import { Image, Transformation } from 'cloudinary-react';
import './home.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


const Home = () => {
  let [cart,setCart] = useRecoilState(cartNumber);
  return (
    <div>
      <section className="browse-the-range">
       <div className='main'>
 <LazyLoadImage className='main1' src={main.main1}/> 
       </div>
     <div className="head">
     <h3>Browse The Range</h3>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </div>

      <div className="RangeImages">
      <LazyLoadImage className='RangeImages' src={RangeImages.dinning}/> 
      <LazyLoadImage className='RangeImages' src={RangeImages.living}/> 
      <LazyLoadImage className='RangeImages' src={RangeImages.bedroom}/> 
        </div> 
      
      </section>

       <h2 className='head'>Our Products</h2>
       
       <div className="products">
       <LazyLoadImage className='products' src={products.product1}/> 
       <LazyLoadImage className='products' src={products.product2}/> 
       <LazyLoadImage className='products' src={products.product3}/> 
       <LazyLoadImage className='products' src={products.product4}/> 
       </div>
       <div className="products">
       <LazyLoadImage className='products' src={products.product1}/> 
       <LazyLoadImage className='products' src={products.product2}/> 
       <LazyLoadImage className='products' src={products.product3}/> 
       <LazyLoadImage className='products' src={products.product4}/>
       </div>
       <div>
       <Link> <button className='btn'>Show more</button></Link>
       </div>
       <div className="slick">
       <LazyLoadImage className='slick1' src={slick.slick1}/>
       {/* <LazyLoadImage className='slick2' src={slick.slick2}/> */}
       </div>

       <div className="furniro">
       <Image className='furniro' cloudName={cloudName} publicId={furniro.furniro}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       </div>
       <div className="fun">
       <p>Share your setup with</p>
       <h2>#FuniroFurniture</h2>
       </div>

       <div className="share">
     <div className="group1">
     <LazyLoadImage className='share' src={share.share1}/>
     <LazyLoadImage className='share' src={share.share2}/>
     <LazyLoadImage className='share' src={share.share3}/>
     <LazyLoadImage className='share' src={share.share4}/>
     <LazyLoadImage className='share' src={share.share5}/>
     <LazyLoadImage className='share' src={share.share6}/>
     <LazyLoadImage className='share' src={share.share7}/>
     <LazyLoadImage className='share' src={share.share8}/>
     <LazyLoadImage className='share' src={share.share9}/>
   </div>
       </div>
    </div>
  )
}

export default Home