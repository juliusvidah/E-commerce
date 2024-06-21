import React from 'react'
import { cloudName, products, shop, slick } from '../cloudimages/Cloud'
import { Image, Transformation } from 'cloudinary-react'
import './shop.scss';


const Shop = () => {
  return ( 
    <div>

      <div className="mainShop">
       
      </div>
<div className="shop">
       <Image cloudName={cloudName} publicId={shop.product1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product2}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product3}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product4}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>      
       </div>
       <div className="shop">
       <Image cloudName={cloudName} publicId={shop.product5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product6}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product7}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product8}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       </div>
       <div className="shop">
       <Image cloudName={cloudName} publicId={shop.product5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product6}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product7}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product8}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       </div>
       <div className="shop">
       <Image cloudName={cloudName} publicId={shop.product5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product6}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product7}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
       <Image cloudName={cloudName} publicId={shop.product8}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
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