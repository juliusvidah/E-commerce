import React from 'react'
import { logo } from '../cloudimages/Cloud'
import { Image, Transformation } from 'cloudinary-react'

const Logo = () => {
  return (
    <div className='logo'>
           <Image cloudName={cloudName} publicId={logo.logo1}>
   <Transformation crop="scale" width="200" angle="0" />
 </Image>
    </div>
  )
}

export default Logo