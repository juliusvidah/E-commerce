import React from 'react'
import { useRecoilState } from 'recoil'
import { cartNumber } from '../atoms/Cart'
import { RangeImages, cloudName, furniro, main, products, share, slick } from '../cloudimages/Cloud';
import { Image, Transformation } from 'cloudinary-react';
import './home.scss';


const Home = () => {
  let [cart,setCart] = useRecoilState(cartNumber);
  return (
    <div>
      <section className="browse-the-range">
       <div className='main'>
       <Image className='main1' cloudName={cloudName} publicId={main.main1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       </div>
     <div className="head">
     <h3>Browse The Range</h3>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </div>

      <div className="rangeImages">
      <Image cloudName={cloudName} publicId={RangeImages.dinning}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
      <Image cloudName={cloudName} publicId={RangeImages.living}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
      <Image cloudName={cloudName} publicId={RangeImages.bedroom}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
        </div> 
      
      </section>

       <h3 className='head'>Our Products</h3>
       
       <div className="products">
       <Image cloudName={cloudName} publicId={products.product1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={products.product2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={products.product3}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={products.product4}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       </div>
       <div className="products">
       <Image cloudName={cloudName} publicId={products.product5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={products.product6}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={products.product7}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={products.product8}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       </div>
       <div>
        <button className='btn'>Show more</button>
       </div>
       <div className="slick">
          {/* <h2>50+ Beautiful rooms 
          inspiration</h2>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p> */}
       <Image className='slick1' cloudName={cloudName} publicId={slick.slick1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image className='slick2' cloudName={cloudName} publicId={slick.slick2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
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
     <Image cloudName={cloudName} publicId={share.share1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={share.share2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={share.share3}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={share.share4}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
     </div>
       <Image cloudName={cloudName} publicId={share.share5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
   <div className="group2">
   <Image cloudName={cloudName} publicId={share.share6}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={share.share7}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={share.share8}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={share.share9}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
   </div>
       </div>

       <h4>Cart: {cart}</h4>
       <button onClick={()=> setCart((prev)=> prev + 1)}>Add to cart</button>
    </div>
  )
}

export default Home