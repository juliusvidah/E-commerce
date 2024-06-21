import React from 'react'
import { cloudName, contact2 } from '../cloudimages/Cloud'
import { Image, Transformation } from 'cloudinary-react'
import './footer.scss'

const Footer = () => {
  return (
    <div>
            <Image className='footer' cloudName={cloudName} publicId={contact2.vector4}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
            <Image className='footer' cloudName={cloudName} publicId={contact2.vector5}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
    </div>
  )
}

export default Footer